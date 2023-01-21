import type Project from '../../@types/project';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`/api/projects`);
	const projects = (await res.json()) as Project[];

	return { projects };
}) satisfies PageLoad;
