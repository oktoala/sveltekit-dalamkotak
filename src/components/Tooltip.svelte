<script lang="ts">
	export let title: string;
	export let x: number;
	export let y: number;
</script>

<div
	class="bg-white text-gray-700 rounded-lg px-5 py-2 absolute shadow dark:bg-gray-500 dark:text-white"
	style="
		top: {y - 50}px;
		left: {x - 60}px;"
>
	{title}
</div>

<style>
	
</style>
