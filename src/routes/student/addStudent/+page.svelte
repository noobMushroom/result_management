<script>
	import { deserialize } from '$app/forms';
	import AddStudentForm from '../../../components/AddStudentForm.svelte';

	let student = $state({
		firstName: '',
		lastName: '',
		fatherName: '',
		dob: '',
		admNo: '',
		section: '',
		class: ''
	});

	let error = $state('');
	let showSuccess = $state(false);
	let formType = $state('Add');

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
			student.firstName = ' ';
			student.lastName = ' ';
			student.fatherName = ' ';
			student.dob = ' ';
			student.admNo = ' ';
			student.section = ' ';
			student.class = ' ';
			setTimeout(() => {
				showSuccess = false;
			}, 3000);
		} else {
			error = result.data.error;
		}
	}
</script>

<AddStudentForm {...student} {showSuccess} {handleSubmit} {formType} />
