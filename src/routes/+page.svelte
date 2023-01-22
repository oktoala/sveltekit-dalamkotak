<script lang="ts">
	import { profileAnimation } from './state';
	// @ts-ignore
	import me from '$lib/images/me.png?webp';

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
	<title>Home</title>
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
			<h2>By Oktavian Yoga Syahputra</h2>
			<h2 class="text-lg">Software Deve<span class="text-red-500 font-bold">lover</span> 🫰</h2>
		</div>
		<button
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
<section class="h-48">
	<div class="container h-full flex items-center justify-center text-4xl font-bold">
		<h3>Lagi Dikerjain... 🚧</h3>
	</div>
</section>
