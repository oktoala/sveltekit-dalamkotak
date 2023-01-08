<script lang="ts">
	import { theme } from './state';
	import Header from './Header.svelte';
	import '../app.css';
	import svelteLogo from '$lib/images/svelte-logo.svg';
	import tailwindLogo from '$lib/images/tailwind-css-logo.png';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	$: theme.update((n) => (n = data.colorTheme as string));
</script>

<div class="app transition-all duration-300">
	<Header />
	<main class="pt-16 h-screen bg-gray-50 text-gray-900 dark:text-white dark:bg-gray-800">
		<slot />
	</main>
	<footer
		class="bg-white/95 text-gray-900 dark:text-white dark:bg-gray-900/95 py-5 w-full backdrop-filter backdrop-blur-md border-gray-200 px-2 sm:px-4 "
	>
		<nav class="container flex flex-wrap items-center justify-center ">
			<div class="">
				Build With <img class="inline w-5" src={svelteLogo} alt="" /> and
				<img class="inline w-5" src={tailwindLogo} alt="" />
			</div>
		</nav>
	</footer>
</div>
