<script>
	import Header from './Header.svelte';
	import { theme } from './state';
	import '../app.css';
</script>

<div class="app {$theme} ">
	<Header />
	<main class="pt-16 h-screen bg-gray-50 text-gray-900 dark:text-white dark:bg-gray-800">
		<slot />
	</main>
</div>
