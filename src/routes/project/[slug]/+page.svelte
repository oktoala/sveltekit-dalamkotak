<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { date, title, Content } = data;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<article class="container mt-10">
	<div class="prose dark:prose-invert max-w-none">
		<h1>{title}</h1>
		<p>Published: {date}</p>
		<svelte:component this={Content} />
	</div>
</article>
