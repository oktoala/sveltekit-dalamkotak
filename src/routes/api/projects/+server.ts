import { fetchProjectsMD } from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (async ({ url }) => {
	const { searchParams } = url;
	const allProjects = await fetchProjectsMD();

	const sortedProjects = allProjects.sort((a, b) => {
		return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
	});

	if (searchParams.get('count')) {
		return json(sortedProjects.slice(0, 3));
	}

	return json(sortedProjects);
}) satisfies RequestHandler;
