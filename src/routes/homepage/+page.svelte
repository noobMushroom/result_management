<script>
	import HomeCard from '../../components/HomeCard.svelte';
	import { data } from '$lib/home_card_data.js';
</script>

<div class=" flex grow items-center justify-center">
	<div class=" md:flex">
		{#each data as data}
			<HomeCard title={data.title} link={data.link} />
		{/each}
	</div>
</div>
