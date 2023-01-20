<script lang="ts">
	import Header from './Header.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import 'nprogress/nprogress.css';
	import '../app.css';
	import svelteLogo from '$lib/images/svelte-logo.svg';
	import tailwindLogo from '$lib/images/tailwind-css-logo.png';
	import Drawer from 'svelte-drawer-component';
	import type { LayoutData } from './$types';

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<div class="app transition-all duration-300 font-primary">
	<Header />
	<main class="pt-16 h-screen bg-gray-50 text-gray-900 dark:text-white dark:bg-gray-800">
		<slot />
	</main>
	<footer
		class="bg-white/95 border-t dark:border-none text-gray-900 dark:text-white dark:bg-gray-900/95 py-5 w-full backdrop-filter backdrop-blur-md border-gray-200 px-2 sm:px-4 "
	>
		<nav class="container flex flex-wrap items-center justify-center ">
			<div class="">
				Build With <a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">
					<img class="inline w-5" src={svelteLogo} alt="" />
				</a>
				and
				<a target="_blank" rel="noreferrer" href="https://tailwindcss.com/">
					<img class="inline w-5" src={tailwindLogo} alt="" />
				</a>
			</div>
		</nav>
	</footer>
</div>

<style>
	.app :global(.drawer .overlay) {
		z-index: 0;
	}
	.app :global(.drawer .open) {
		z-index: 10;
	}
	.app :global(.drawer .panel) {
		background: black;
		color: white;
		z-index: 10;
	}
</style>
