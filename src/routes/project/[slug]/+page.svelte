<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { date, title, Content } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="container mt-10">
	<div class="max-w-none prose project dark:prose-invert">
		<h1 class="mb-0 md:text-5xl">{title}</h1>
		<div class="flex items-center -mb-5 text-sm">
			<p>Oktavian Yoga Syahputra</p>
			<p class="mx-2">/</p>
			<p>{date}</p>
		</div>
		<svelte:component this={Content} />
	</div>
</article>
