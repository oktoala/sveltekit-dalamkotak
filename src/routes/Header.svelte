<script>
	import { theme } from './state';
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import Logo from '../components/Logo.svelte';
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/2f975d5468.js" crossorigin="anonymous"></script>
</svelte:head>

<header
	class="bg-white/95 dark:bg-gray-900/95 top-0 z-40 fixed w-full backdrop-filter backdrop-blur-md border-gray-200 px-2 sm:px-4 py-1 shadow "
>
	<nav class="container flex flex-wrap items-center justify-between ">
		<button
			on:click={() => {
				theme.update((n) => (n = n === 'dark' ? 'light' : 'dark'));
			}}
		>
			<Logo className="cursor-help" />
		</button>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<i class="fa-solid fa-bars" />
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<div
				class="flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0  "
			>
				<a
					href="/"
					class="block color-reverse py-2 pl-3 pr-4 font-bold  {$page.url.pathname === '/'
						? 'active'
						: 'bg-gray-400'} md:p-0 "
					aria-current="page">Home</a
				>
				<a
					href="/about"
					class="block color-reverse py-2 pl-3 pr-4 font-bold {$page.url.pathname === '/about'
						? 'active'
						: 'bg-gray-400'} md:p-0 ">About</a
				>
			</div>
		</div>
		<div class="hidden md:flex justify-between w-28 text-gray-700">
			<i class="fa-brands fa-github-alt hover:text-black w-6 h-6" />
			<i class="fa-brands fa-gitlab w-6 h-6 hover:text-orange-ig" />
			<i class="fa-brands fa-instagram w-6 h-6 hover:text-red-ig" />
		</div>
	</nav>
</header>
