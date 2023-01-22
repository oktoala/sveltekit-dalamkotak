<script lang="ts">
	import { profileAnimation } from './state';
	// @ts-ignore
	import me from '$lib/images/me.png?webp';
	import type { PageData } from './$types';

	export let data: PageData;
	const { projects } = data;
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
	<div class="container py-6 flex items-center justify-between">
		<div class="">
			<h1
				class="text-5xl font-bold bg-gradient-to-r bg-clip-text from-primary via-secondary to-third text-transparent"
			>
				Dalamkotak Website
			</h1>
			<h2 class="font-semibold text-lg">By Oktavian Yoga Syahputra</h2>
			<h2 class="text-base">
				Software Deve<span class="text-red-600 dark:text-red-400 font-bold">lover</span> 🫰
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
			<div class="bg-cover bg-gray-900 relative dark:bg-white z-10 rounded-full w-40 h-40" />
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
	<h2 class="text-2xl font-bold mb-4">Recent Projects</h2>
	<div class="flex gap-6 flex-col md:flex-row">
		{#each projects as project}
			<a
				class="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-fourth to-sixth"
				href={project.path}
			>
				<div class="flex flex-col justify-between h-full bg-white dark:bg-bodyDark rounded-lg p-4">
					<div class="mb-3">
						<div class="flex flex-col md:flex-row justify-between">
							<h2
								class="text-lg md:text-lg font-medium mb-1 sm:mb-2 w-full text-gray-900 dark:text-gray-100 "
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
		class="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
		href="/project"
		>See All Projects<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="h-6 w-6 ml-1"
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
