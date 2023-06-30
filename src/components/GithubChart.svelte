<script lang="ts">
	import type GithubUser from '../@types/github';
	import { tooltip } from '../lib/utils/tootlip';
	import { dayjs } from 'svelte-time';

	export let datas: GithubUser;
	export let type: 'gitlab' | 'github' = 'github';
	const { user } = datas;
	const months = user.contributionsCollection.contributionCalendar.months;

	const getColor = (
		level: 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE',
		type: 'github' | 'gitlab'
	) => {
		let className = '';
		if (type === 'github') {
			if (level === 'NONE') {
				className = 'fill-[#ebedf0] dark:fill-[#161b22]';
			} else if (level === 'FIRST_QUARTILE') {
				className = 'fill-[#9be9a8] dark:fill-[#0e4429]';
			} else if (level === 'SECOND_QUARTILE') {
				className = 'fill-[#40c463] dark:fill-[#006d32]';
			} else if (level === 'THIRD_QUARTILE') {
				className = 'fill-[#30a14e] dark:fill-[#26a641]';
			} else if (level === 'FOURTH_QUARTILE') {
				className = 'fill-[#216e39] dark:fill-[#39d353]';
			}
		} else if (type === 'gitlab') {
			if (level === 'NONE') {
				className = 'fill-[#ececef] dark:fill-[#333238]';
			} else if (level === 'FIRST_QUARTILE') {
				className = 'fill-[#d2dcff] dark:fill-[#303470]';
			} else if (level === 'SECOND_QUARTILE') {
				className = 'fill-[#7992f5] dark:fill-[#4e65cd]';
			} else if (level === 'THIRD_QUARTILE') {
				className = 'fill-[#3f51ae] dark:fill-[#97acff]';
			} else if (level === 'FOURTH_QUARTILE') {
				className = 'fill-[#2a2b59] dark:fill-[#e9ebff]';
			}
		}

		return className;
	};
</script>

<svg class="" width="770">
	<g transform="translate(15, 20)">
		{#each user.contributionsCollection.contributionCalendar.weeks as week, i}
			<g transform={`translate(${i * 14}, 0)`}>
				{#each week.contributionDays as contributionDay, ii}
					<rect
						class={`${getColor(contributionDay.contributionLevel, type)}`}
						width="10"
						height="10"
						x="14"
						y={ii * 13}
						data-tooltip=""
						use:tooltip
						>{`${contributionDay.contributionCount ?? 'No'} contributions on ${dayjs(
							contributionDay.date
						).format('MMMM DD, YYYY')}`}</rect
					>
				{/each}
			</g>
		{/each}
		{#each months as month, i}
			<text x={i !== 0 ? 14 + 13 * 4 * i : '14'} y="-7" class="text-xs fill-black dark:fill-white"
				>{month.name}</text
			>
		{/each}

		<text
			text-anchor="start"
			class="fill-black dark:fill-white text-xs"
			dx="-15"
			dy="8"
			style="display: none;">Sun</text
		>
		<text text-anchor="start" class="text-xs fill-black dark:fill-white" dx="-15" dy="22">Mon</text>
		<text
			text-anchor="start"
			class="fill-black dark:fill-white text-xs"
			dx="-15"
			dy="32"
			style="display: none;">Tue</text
		>
		<text text-anchor="start" class="fill-black dark:fill-white text-xs" dx="-15" dy="48">Wed</text>
		<text
			text-anchor="start"
			class="fill-black dark:fill-white text-xs"
			dx="-15"
			dy="57"
			style="display: none;">Thu</text
		>
		<text text-anchor="start" class="fill-black dark:fill-white text-xs" dx="-15" dy="73">Fri</text>
		<text
			text-anchor="start"
			class="fill-black dark:fill-white text-xs"
			dx="-15"
			dy="81"
			style="display: none;">Sat</text
		>
	</g>
</svg>

<!-- <style>
	.none-level {
		fill: ;
	}
</style> -->
