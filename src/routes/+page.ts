import type Project from '../@types/project';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }): Promise<{ projects: Project[] }> => {
	const res = await fetch(`/api/projects?count=3`);
	const projects = await res.json();

	return { projects };
}) satisfies PageLoad;
