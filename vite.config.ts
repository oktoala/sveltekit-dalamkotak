import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), imagetools({ force: true })],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
