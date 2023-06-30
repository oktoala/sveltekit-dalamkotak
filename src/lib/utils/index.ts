import type { GitlabUser } from '../../@types/github';
import type GithubUser from '../../@types/github';
import type Project from '../../@types/project';

export const fetchProjectsMD = async () => {
  const allProjectFiles = import.meta.glob<Project>('/src/routes/project/*.md');
  const iterableProjectsFiles = Object.entries(allProjectFiles);

  const allProjects = await Promise.all(
    iterableProjectsFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const projectPath = path.slice(11, -3);

      return {
        metadata: metadata,
        path: projectPath
      };
    })
  );
  return allProjects;
};

export const fetchGithubContribution = async (token: string, username: string) => {
  const headers = {
    Authorization: `Bearer ${token}`
  };

  const body = {
    query: `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  colors
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      contributionCount
                      contributionLevel
                      date
                      weekday
                    }
                    firstDay
                  }
                  months {
                    name
                    year
                    firstDay
                    totalWeeks
                  }
                }
              }
            }
          }`
  };

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers
  });

  const data = (await res.json()) as { data: GithubUser };

  return data;
};

export const getGitlabData = async (githubData: GithubUser): Promise<GitlabUser> => {
  const getTier = (
    count: number
  ): 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE' => {
    if (count > 0 && count <= 9) {
      return 'FIRST_QUARTILE';
    }
    if (count > 9 && count <= 19) {
      return 'SECOND_QUARTILE';
    }
    if (count > 19 && count <= 29) {
      return 'THIRD_QUARTILE';
    }
    if (count >= 30) {
      return 'FOURTH_QUARTILE';
    }
    return 'NONE';
  };
  const temp = githubData;
  try {
    const contributeGitlab = await fetch('https://gitlab.com/users/oktavian_yoga/calendar.json', {
      method: 'GET',
      headers: {
        Cookie: '_cfuvid=83TP1XEdxSjnIyxYjJNiDXmh4G0SF6kdxsEmj.gm79g-1674659765409-0-604800000'
      }
    });

    const date = await contributeGitlab.json();
    console.log(date);
    // const dateArray = Object.keys(date);
    // temp.user.contributionsCollection.contributionCalendar.weeks.forEach((e, i) => {
    //   e.contributionDays.forEach((ee, ii) => {
    //     if (dateArray.some((cc) => cc === dayjs(ee.date).format('YYYY-MM-DD'))) {
    //       const key = dayjs(ee.date).format('YYYY-MM-DD');
    //       ee.contributionCount = date[key];
    //       ee.contributionLevel = getTier(ee.contributionCount);
    //     } else {
    //       ee.contributionCount = 0;
    //       ee.contributionLevel = 'NONE'
    //     }
    //   })
    // })
  } catch (error) {
    console.log(JSON.stringify(error));
  }
  // console.log(temp);

  return temp;
};
