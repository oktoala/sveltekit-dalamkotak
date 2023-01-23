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
