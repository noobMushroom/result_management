<script>
	let props = $props();
</script>

<div
	class=" card flex justify-between p-4 shadow max-sm:border-2 max-sm:border-indigo-900 md:w-96 md:rounded-lg md:border-l-8 md:border-l-fuchsia-800 md:bg-cyan-900/30"
>
	<div>
		<p class=" mb-2 text-xl font-black text-rose-400 md:text-4xl">
			{props.firstName}
			{props.lastName}
		</p>
		<p class=" text-stone-400">{props.fatherName}</p>
		<p class=" text-blue-300 md:text-xl">
			{props.class}
			{#if props.section}
				({props.section})
			{/if}
		</p>
	</div>

	<div class=" buttons flex flex-col justify-evenly text-xl md:justify-between">
		<button aria-label="edit button" class=" mb-2 text-teal-700 md:text-2xl"
			><i class="fa-regular fa-pen-to-square"></i></button
		>
		<button aria-label="delete button" class=" text-red-500 md:text-2xl"
			><i class="fa-solid fa-trash"></i></button
		>
	</div>
</div>

<style>
	@media (min-width: 760px) {
		.card {
			position: relative;
			overflow: hidden;
		}
		.buttons {
			opacity: 0;
			transform: translateX(100%);
			transition:
				opacity 0.3s ease,
				transform 0.3s ease;
		}
		.card:hover .buttons {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
