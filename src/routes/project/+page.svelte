<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { projects } = data;
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<section class=" container mt-10">
	<h1 class="text-3xl md:text-5xl font-bold tracking-tight">Projects</h1>
	<div class="my-4">
		{#each projects as project}
			<a class="" href={project.path}>
				<h2 class="font-semibold text-2xl">
					{project.metadata.title}
				</h2>
				<p>{project.metadata.summary}</p>
			</a>
		{/each}
	</div>
</section>
