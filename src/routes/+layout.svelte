<script lang="ts">
	import Header from './Header.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import 'nprogress/nprogress.css';
	import '../app.css';
	import svelteLogo from '$lib/images/svelte-logo.svg';
	import tailwindLogo from '$lib/images/tailwind-css-logo.png';
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

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link rel="canonical" href="https://dalamkotak.com"/>
	<meta name="description" content="Dalamkotak - Portofolio website" />
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
</svelte:head>

<div class="app transition-all duration-300 font-primary">
	<Header />
	<main class="pt-16 pb-10 min-h-screen bg-gray-50 text-gray-900 dark:text-white dark:bg-gray-800">
		<slot />
	</main>
	<footer
		class="bg-white/95 border-t dark:border-none text-gray-900 dark:text-white dark:bg-gray-900/95 py-5 w-full backdrop-filter backdrop-blur-md border-gray-200 px-2 sm:px-4 "
	>
		<nav class="container flex flex-wrap items-center justify-center ">
			<div class="">
				Build With <a aria-label="SvelteKit" href="https://kit.svelte.dev/" target="_blank" rel="noreferrer">
					<img class="inline w-5" src={svelteLogo} alt="" />
				</a>
				and
				<a target="_blank" rel="noreferrer" aria-label="TailwindCSS" href="https://tailwindcss.com/">
					<img class="inline w-5" src={tailwindLogo} alt="" />
				</a>
			</div>
		</nav>
	</footer>
</div>
