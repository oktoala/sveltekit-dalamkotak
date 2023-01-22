<script lang="ts">
	import { theme } from './state';
	import { page } from '$app/stores';
	import type { SubmitFunction } from '$app/forms';
	import { enhance } from '$app/forms';
	import Logo from '../components/Logo.svelte';
	import { browser } from '$app/environment';
	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
	if (browser) {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			darkMode = true;
		} else {
			darkMode = false;
		}
	}
</script>

<svelte:head>

	<script>
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	</script>
</svelte:head>

<header
	class="bg-white/90 dark:bg-gray-900/90 top-0 z-40 fixed w-full backdrop-filter backdrop-blur-md border-gray-200 px-2 sm:px-4 py-1 shadow "
>
	<nav class="container flex flex-wrap items-center justify-between ">
		<!-- svelte-ignore missing-declaration -->
		<button aria-label="Logo" type="button" on:click={handleSwitchDarkMode}>
			<Logo className="cursor-help" />
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<div
				class="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0  "
			>
				<a
					aria-label="Home"
					href="/"
					class="block color-reverse py-2 pl-3 pr-4 font-bold  {$page.url.pathname === '/'
						? 'active'
						: 'bg-gray-400'} md:p-0 "
					aria-current="page">Home</a
				>
				<a
					aria-label="About"
					href="/about"
					class="block color-reverse py-2 pl-3 pr-4 font-bold {$page.url.pathname === '/about'
						? 'active'
						: 'bg-gray-400'} md:p-0 ">About</a
				>
				<a
					aria-label="Project"
					href="/project"
					class="block color-reverse py-2 pl-3 pr-4 font-bold {$page.url.pathname.includes(
						'/project'
					)
						? 'active'
						: 'bg-gray-400'} md:p-0 ">Project</a
				>
			</div>
		</div>
		<div class="hidden md:flex justify-between w-28 text-gray-500 dark:text-gray-200">
			<a aria-label="Github" target="_blank" rel="noreferrer" href="https://github.com/oktoala">
				<svg
					class="svg-inline--fa fa-github-alt hover:text-black dark:hover:text-white w-6 h-6"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="github-alt"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 480 512"
					data-fa-i2svg=""
					><path
						fill="currentColor"
						d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
					/></svg
				>
			</a>
			<a
				aria-label="Gitlab"
				target="_blank"
				rel="noreferrer"
				href="https://gitlab.com/oktavian_yoga"
			>
				<svg
					class="svg-inline--fa fa-gitlab w-6 h-6 hover:text-orange-ig"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="gitlab"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					data-fa-i2svg=""
					><path
						fill="currentColor"
						d="M503.5 204.6L502.8 202.8L433.1 21.02C431.7 17.45 429.2 14.43 425.9 12.38C423.5 10.83 420.8 9.865 417.9 9.57C415 9.275 412.2 9.653 409.5 10.68C406.8 11.7 404.4 13.34 402.4 15.46C400.5 17.58 399.1 20.13 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.13 111.5 17.59 109.6 15.47C107.6 13.35 105.2 11.72 102.5 10.7C99.86 9.675 96.98 9.295 94.12 9.587C91.26 9.878 88.51 10.83 86.08 12.38C82.84 14.43 80.33 17.45 78.92 21.02L9.267 202.8L8.543 204.6C-1.484 230.8-2.72 259.6 5.023 286.6C12.77 313.5 29.07 337.3 51.47 354.2L51.74 354.4L52.33 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z"
					/></svg
				>
			</a>
			<a
				aria-label="Instagram"
				target="_blank"
				rel="noreferrer"
				href="https://www.instagram.com/yogatra29/"
			>
				<svg
					class="svg-inline--fa fa-instagram w-6 h-6 hover:text-red-ig"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="instagram"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					data-fa-i2svg=""
					><path
						fill="currentColor"
						d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
					/></svg
				>
			</a>
		</div>
	</nav>
</header>
