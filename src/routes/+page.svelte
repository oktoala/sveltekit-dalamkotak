<script lang="ts">
	import { profileAnimation } from './state';
	import GithubChart from '../components/GithubChart.svelte';
	// @ts-ignore
	import me from '$lib/images/me.png?webp';
	import type { PageData } from './$types';

	export let data: PageData;
	const { projects, contribution } = data;
	const clickProfile = () => {
		// Active
		if (!$profileAnimation.reverse) {
			if (!$profileAnimation.isActive) {
				$profileAnimation.isActive = true;
			} /* Spin */ else if ($profileAnimation.isActive && !$profileAnimation.isSpinning) {
				$profileAnimation.isSpinning = true;
				return;
			} /* Bounce */ else if ($profileAnimation.isActive && $profileAnimation.isSpinning) {
				$profileAnimation.isBounce = true;
				$profileAnimation.reverse = true;
			}
		} else if ($profileAnimation.reverse) {
			if (
				$profileAnimation.isActive &&
				$profileAnimation.isSpinning &&
				$profileAnimation.isBounce
			) {
				$profileAnimation.isBounce = false;
			} else if ($profileAnimation.isActive && $profileAnimation.isSpinning) {
				$profileAnimation.isSpinning = false;
			} else if ($profileAnimation.isActive) {
				$profileAnimation.isActive = false;
				$profileAnimation.reverse = false;
			}
		}
	};
</script>

<svelte:head>
	<title>Dalamkotak</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="w-full">
	<div class="container flex justify-between items-center py-6">
		<div class="">
			<h1
				class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-third"
			>
				Dalamkotak Website
			</h1>
			<h2 class="text-lg font-semibold">By Oktavian Yoga Syahputra</h2>
			<h2 class="text-base">
				Software Deve<span class="font-bold text-red-600 dark:text-red-400">lover</span> 🫰
			</h2>
		</div>
		<button
			aria-label="Button Profile"
			on:click={clickProfile}
			class="hidden md:block relative {!$profileAnimation.isActive &&
				'cursor-help'} {$profileAnimation.isActive &&
				!$profileAnimation.isSpinning &&
				'cursor-wait'}  transition-all {$profileAnimation.isBounce && 'animate-bounce'}"
		>
			<div class="relative z-10 w-40 h-40 bg-gray-900 bg-cover rounded-full dark:bg-white" />
			<div
				class="{$profileAnimation.isActive ? 'block' : 'hidden'} {$profileAnimation.isSpinning &&
					'animate-spin'} bg-cover bg-gradient-to-r from-yellow-ig via-orange-ig to-red-ig  dark:from-red-ig dark:via-pink-ig dark:to-purple-ig absolute -top-2 -left-2 z-0 dark:bg-red-500 rounded-full w-44 h-44"
			/>
			<div
				class="bg-cover w-40 h-44 {!$profileAnimation.isActive &&
					'grayscale'}   hover:grayscale-0 z-20  absolute -top-4 rounded-full"
				style="background-image: url('{me}');"
			/>
		</button>
	</div>
</section>
<section class="container mt-20">
	<h2 class="mb-4 text-2xl font-bold">Recent Projects</h2>
	<div class="flex flex-col gap-6 md:flex-row">
		{#each projects as project}
			<a
				class="p-1 w-full bg-gradient-to-r rounded-xl transition-all transform md:w-1/3 from-fourth to-sixth hover:scale-[1.01]"
				href={project.path}
			>
				<div class="flex flex-col justify-between p-4 h-full bg-white rounded-lg dark:bg-bodyDark">
					<div class="mb-3">
						<div class="flex flex-col justify-between md:flex-row">
							<h2
								class="mb-1 w-full text-lg font-medium text-gray-900 sm:mb-2 md:text-lg dark:text-gray-100"
							>
								{project.metadata.title}
							</h2>
						</div>
						<div class="flex items-center text-gray-500 dark:text-gray-200 capsize">
							{project.metadata.summary}
						</div>
					</div>
					<img src={project.metadata.logo} alt={project.metadata.title} width="60" />
				</div>
			</a>
		{/each}
	</div>
	<a
		class="flex items-center mt-8 h-6 leading-7 text-gray-600 rounded-lg transition-all dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
		href="/project"
		>See All Projects<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="ml-1 w-6 h-6"
			><path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
			/></svg
		></a
	>
</section>
<section class="container mt-10">
	<h2 class="mb-4 text-2xl font-bold">Github Contributions</h2>
	<div class="overflow-x-auto px-10 pt-2">
		<GithubChart datas={contribution} type="github" />
	</div>
</section>
