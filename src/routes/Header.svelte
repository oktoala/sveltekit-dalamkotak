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
	<script src="https://kit.fontawesome.com/2f975d5468.js" crossorigin="anonymous"></script>

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
					aria-label="Projectj"
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
				<i class="fa-brands fa-github-alt hover:text-black dark:hover:text-white w-6 h-6" />
			</a>
			<a aria-label="Gitlab" target="_blank" rel="noreferrer" href="https://gitlab.com/oktavian_yoga">
				<i class="fa-brands fa-gitlab w-6 h-6 hover:text-orange-ig" />
			</a>
			<a aria-label="Instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/yogatra29/">
				<i class="fa-brands fa-instagram w-6 h-6 hover:text-red-ig" />
			</a>
		</div>
	</nav>
</header>
