<script>
	import Student from './Student.svelte';

	let { data } = $props();
</script>

<div class=" flex grow flex-col items-center">
	<div class=" flex gap-4 p-4 md:w-3/4">
		<input
			type="search"
			placeholder="Search Student"
			name="search-bar"
			id="search-bar"
			autocomplete="off"
			class=" border-t-none border-r-none border-l-none border-b-4 border-b-pink-600 bg-transparent outline-none focus:outline-none md:w-3/6"
		/>
		<a href="/student/addStudent" class=" bg-rose-600 p-4 text-center hover:bg-rose-600/50 md:w-56"
			><i class="fa-solid fa-plus"></i> Add Student</a
		>

		<button class=" text-rose-400" aria-label="filter"><i class="fa-solid fa-filter"></i></button>
	</div>

	<div class=" card mt-4 w-[100%] gap-4 p-4 md:w-3/4">
		{#each data.students as student}
			<Student {...student} />
		{/each}
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	}
</style>
