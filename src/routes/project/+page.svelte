<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { projects } = data;
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<section class=" container mt-10">
	<h1
		class="text-2xl md:text-4xl bg-gradient-to-tr bg-clip-text from-secondary to-third text-transparent font-bold tracking-tight"
	>
		Projects
	</h1>
	<div class="mt-6">
		{#each projects as project}
			<a class="" href={project.path}>
				<div
					class="mb-5 hover:shadow-lg  hover:bg-white dark:hover:bg-bodyDark p-4 rounded-lg dark:hover:shadow-none dark:hover:border-gray-50 dark:border-transparent dark:border transition-all"
				>
					<h2 class="font-semibold text-xl">
						{project.metadata.title}
					</h2>
					<p class="text-gray-500 dark:text-gray-400">{project.metadata.summary}</p>
				</div>
			</a>
		{/each}
	</div>
</section>
