import type { LayoutServerLoad } from './$types';

export const ssr = true;

export const load = (async ({ cookies }) => {
	const colorTheme = cookies.get('colorTheme');

	return {
		colorTheme: colorTheme
	};
}) satisfies LayoutServerLoad;
