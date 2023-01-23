<script>
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="container mt-10">
	<div class="prose about dark:prose-invert max-w-none prose-a">
		<h1
			class="text-2xl md:text-4xl bg-gradient-to-tr bg-clip-text from-secondary to-third text-transparent font-bold tracking-tight"
		>
			About
		</h1>
		<slot />
	</div>
</section>
