import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	let themee: string | null = null;

	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('colorTheme');

	console.log(`handleCookieTheme: ${cookieTheme}`);

	if (newTheme) {
		themee = newTheme;
	} else if (cookieTheme) {
		themee = cookieTheme;
	}

	if (themee) {
		return await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('class=""', `class="${themee}"`)
		});
	}
	return await resolve(event);
}) satisfies Handle;
