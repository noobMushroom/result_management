<script>
	import Student from '../../components/Student.svelte';

	import { all_classes, all_sections } from '$lib/class_data.js';
	import { deleteDoc, doc } from 'firebase/firestore';
	import { db } from '$lib/firebase.js';

	let { data } = $props();

	// Filters for class and sections to show in display
	let classes_filter = $state([]);
	let sections_filter = $state([]);

	// Students state
	let students_arr = $state(data.students);

	//State for showing filter menu
	let showDiv = $state(false);

	let search_term = $state('');
	let error = $state();

	// Sorting function for the hondle filter
	function handleFilter(student) {
		if (!sections_filter.length) {
			return classes_filter.includes(student.class);
		} else {
			return classes_filter.includes(student.class) && sections_filter.includes(student.section);
		}
	}

	function handleSearch(student) {
		let temp_search_term = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
		return temp_search_term.includes(search_term.toLowerCase().trim());
	}

	// Deriving the students array to filter which students to show on the screen
	let students = $derived.by(() => {
		let temp;
		if (!classes_filter.length) {
			temp = students_arr;
		}

		if (classes_filter.length) {
			temp = students_arr.filter(handleFilter);
		}

		if (search_term) {
			temp = temp.filter(handleSearch);
		}

		return temp;
	});

	// Function to handle student delete
	async function handleDelete(uid) {
		if (confirm('Are you sure you want to delete this student you will lose all of its data?')) {
			try {
				const docRef = doc(db, 'students', uid);
				await deleteDoc(docRef);

				let temp = students_arr.filter((student) => student.id !== uid);
				students_arr = temp;
			} catch (e) {
				error = e;
			}
		}
	}
</script>

<div class=" flex grow flex-col items-center">
	{#if error}
		<h1 class=" text-red-700">{error}</h1>
	{/if}
	<div class=" justify-between gap-4 p-4 max-sm:w-[100%] md:flex md:w-3/4">
		<input
			type="search"
			placeholder="Search Student"
			bind:value={search_term}
			name="search-bar"
			id="search-bar"
			autocomplete="off"
			class="  focus:broder-b-pink border-0 border-b-4 border-b-pink-600 bg-transparent outline-none focus:border-0 focus:border-b-4 active:border-0 max-sm:mb-10 max-sm:w-[100%] md:w-3/6"
		/>
		<div class=" flex gap-10">
			<a
				href="/student/addStudent"
				class=" bg-rose-600 p-4 text-center hover:bg-rose-600/50 md:w-56"
				><i class="fa-solid fa-plus"></i> Add Student</a
			>

			<div class=" relative">
				<button
					class="  text-3xl text-rose-400"
					onclick={() => (showDiv = !showDiv)}
					aria-label="filter"><i class="fa-solid fa-filter"></i></button
				>
				{#if showDiv}
					<div
						class=" absolute right-[-50%] z-10 flex w-60 gap-4 bg-blue-900 p-4 text-xl text-rose-100 shadow"
					>
						<div class=" flex flex-col">
							<h1>Classes</h1>
							{#each all_classes as grade}
								<label>
									<input
										type="checkbox"
										bind:group={classes_filter}
										value={grade}
										class="  appearance-none checked:border-none checked:bg-red-600 indeterminate:bg-pink-300 focus:bg-transparent"
									/>
									{grade}
								</label>
							{/each}
						</div>
						<div class=" flex flex-col">
							<h1>Sections</h1>
							{#each all_sections as section}
								<label>
									<input
										class="  appearance-none checked:border-none checked:bg-red-600 indeterminate:bg-pink-300 focus:bg-transparent"
										type="checkbox"
										bind:group={sections_filter}
										value={section}
									/>
									{section}
								</label>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<div class=" card mt-4 w-[100%] gap-4 p-4 md:w-3/4">
		{#each students as student}
			<Student {...student} {handleDelete} />
		{/each}
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	}
</style>
