// import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	setTheme: async ({ url, cookies }) => {
		const themee = url.searchParams.get('theme');
		// const redirectTo = url.searchParams.get('redirectTo');

		if (themee) {
			cookies.set('colorTheme', themee, {
				path: '/',
				maxAge: 60 * 60 * 24 * 365
			});
		}

		// throw redirect(303, redirectTo ?? '/');
	}
};
