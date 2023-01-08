<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import me from '$lib/images/me.png';
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
			<h2 class="text-lg">Software Deve<span class="text-red-500 font-bold">lover</span> ❤️</h2>
		</div>
		<div class="relative">
			<div class="bg-cover bg-gray-900 dark:bg-white rounded-full w-40 h-40" />
			<div class="bg-cover w-40 h-44 grayscale hover:grayscale-0  absolute -top-4 rounded-full" style="background-image: url('{me}');" />
		</div>
	</div>
</section>
