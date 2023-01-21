import { fetchProjectsMD } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allProjects = await fetchProjectsMD();

	const sortedProjects = allProjects.sort((a, b) => {
		return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
	});

	return json(allProjects);
};
