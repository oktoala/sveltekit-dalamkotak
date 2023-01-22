<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { date, title, Content } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="container mt-10 ">
	<div class="prose dark:prose-invert max-w-none prose-a:text-sky-500">
		<h1 class="md:text-5xl mb-0">{title}</h1>
		<div class="flex items-center text-sm -mb-5">
			<p>Oktavian Yoga Syahputra</p>
			<p class="mx-2">/</p>
			<p>{date}</p>
		</div>
		<svelte:component this={Content} />
	</div>
</article>
