<script>
	import { classesData } from '$lib/resultData.js';
	import ResultCard from '../../../../components/ResultCard.svelte';

	let props = $props();

	let term = $state('');

	let studentClass = props.data.studentData.class;
	let data = classesData[studentClass];
	let terms = Object.keys(data.terms);

	function initializeMarks(studentClass) {
		const classData = classesData[studentClass];
		let initialMarks = {
			id: props.data.studentData.id,
			terms: {}
		};

		Object.keys(classData.terms).forEach((termName) => {
			initialMarks.terms[termName] = {};

			classData.subjects.forEach((subject) => {
				initialMarks.terms[termName][subject] = {};

				classData.terms[termName].examType.forEach((examType) => {
					initialMarks.terms[termName][subject][examType] = null;
				});
			});
		});

		return initialMarks;
	}

	let marks = $state(initializeMarks(studentClass));
	function handleSubmit(event) {
		event.preventDefault();
		console.log('test');
	}
</script>

<div class=" grow">
	<select name="term" class=" bg-transparent" bind:value={term}>
		{#each terms as term}
			<option class=" text-black" value={term}>{term.toUpperCase()}</option>
		{/each}
	</select>
	{#if term}
		<ResultCard {...classesData[studentClass]} {term} {handleSubmit} {marks} />
	{/if}
</div>
