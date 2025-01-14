<script>
	import { deserialize } from '$app/forms';
	import { goto } from '$app/navigation';
	import AddStudentForm from '../../../../components/AddStudentForm.svelte';

	let { data } = $props();

	let student = $state({
		firstName: data.studentData.firstName,
		lastName: data.studentData.lastName,
		fatherName: data.studentData.fatherName,
		dob: data.studentData.dob,
		admNo: data.studentData.admNo,
		section: data.studentData.section,
		class: data.studentData.class,
		id: data.studentData.id
	});

	let error = $state('');
	let showSuccess = $state(false);
	let formType = $state('Update');

	async function handleSubmit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data
		});
		const result = deserialize(await response.text());
		if (result.data.success) {
			showSuccess = true;

			student.firstName = '';
			student.lastName = '';
			student.fatherName = '';
			student.dob = '';
			student.admNo = '';
			student.section = '';
			student.class = '';
			student.id = '';
			setTimeout(() => {
				showSuccess = false;
			}, 3000);

			goto('/student');
		} else {
			error = result.data.error;
		}
	}
</script>

<AddStudentForm {...student} {handleSubmit} {showSuccess} {formType} />
