<script lang="ts">
	import { each } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;
	const { projects } = data;
</script>

<svelte:head>
	<title>Project</title>
</svelte:head>

<section class="container mt-10">
	<h1
		class="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr md:text-4xl from-secondary to-third"
	>
		Projects
	</h1>
	<div class="mt-6">
		{#each projects as project}
			<a aria-label={project.metadata.title} class="" href={project.path}>
				<div
					class="flex justify-between items-center p-4 mb-5 rounded-lg border border-transparent transition-all hover:bg-white hover:shadow-lg dark:hover:bg-bodyDark dark:hover:shadow-none dark:hover:border-gray-50"
				>
					<div>
						<h2 class="text-xl font-semibold">
							{project.metadata.title}
						</h2>
						<p class="text-gray-500 dark:text-gray-400">{project.metadata.summary}</p>
						<div class="flex items-center mt-2">
							{#each project.metadata.tech as tech}
								<div class="mr-2 text-xs text-gray-500">#{tech}</div>
							{/each}
						</div>
					</div>
					<img src={project.metadata.logo} height="50" width="50" alt={project.metadata.title} />
				</div>
			</a>
		{/each}
	</div>
</section>
