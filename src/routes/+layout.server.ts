import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	const colorTheme = cookies.get('colorTheme');

	console.log(`LayoutServer: ${colorTheme}`);

	return {
		colorTheme: colorTheme
	};
}) satisfies LayoutServerLoad;
