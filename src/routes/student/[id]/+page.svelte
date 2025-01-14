<script>
	import { deleteDoc, doc } from 'firebase/firestore';
	import StudentDetailCard from '../../../components/StudentDetailCard.svelte';
	import { goto } from '$app/navigation';
	import { db } from '$lib/firebase.js';

	let props = $props();

	console.log(props);
	let error = $state('');

	async function handleDelete(uid) {
		if (confirm('Are you sure you want to delete this student you will lose all of its data?')) {
			try {
				const docRef = doc(db, 'students', uid);
				await deleteDoc(docRef);
				goto('/student');
			} catch (e) {
				console.log(e);
				error = e;
			}
		}
	}
</script>

<div class=" grow">
	<StudentDetailCard {...props.data.studentData} {handleDelete} />
	{#if !props.data.resultData}
		<a href="/result/addResult/{props.data.studentData.id}">Add Result</a>
	{/if}
</div>
