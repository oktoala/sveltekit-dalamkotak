import type Project from '../@types/project';
import { fetchGithubContribution } from '../lib/utils';
import type { PageLoad } from './$types';
import { PUBLIC_GITHUB_ACCESS_TOKEN } from '$env/static/public';
import type GithubUser from '../@types/github';

export const load = (async ({
	fetch
}): Promise<{ projects: Project[]; contribution: GithubUser }> => {
	const res = await fetch(`/api/projects?count=3`);
	const contributon = await fetchGithubContribution(`${PUBLIC_GITHUB_ACCESS_TOKEN}`, 'oktoala');
	const projects = await res.json();

	return { projects, contribution: contributon.data };
}) satisfies PageLoad;
