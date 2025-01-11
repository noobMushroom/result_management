<script>
	import { fly } from 'svelte/transition';
	import { deserialize } from '$app/forms';
	const classes = ['nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8'];
	const sections = ['A', 'B', 'C', 'D'];

	let first_name = $state('');
	let last_name = $state('');
	let father_name = $state('');
	let dob = $state('');
	let adm_no = $state();
	let student_class = $state('');
	let section = $state('');
	let success = $state('');
	let error = $state('');
	let showSuccess = $state(false);

	async function handleAddStudent(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data
		});
		const result = deserialize(await response.text());
		if (result.data.success) {
			showSuccess = true;

			success = true;
			first_name = '';
			last_name = '';
			father_name = '';
			dob = '';
			adm_no = '';
			student_class = '';
			section = '';
			setTimeout(() => {
				showSuccess = false;
			}, 3000);
		} else {
			error = result.data.error;
		}
	}
</script>

{#if showSuccess}
	<div class=" z-10 flex w-[100%] justify-center">
		<p
			class=" left-1/2 w-72 rounded bg-green-500 p-4 text-center text-white shadow"
			transition:fly={{ y: 200, duration: 2000 }}
		>
			successfully Added
		</p>
	</div>
{/if}
<form class="   flex grow flex-col items-center justify-center p-4" onsubmit={handleAddStudent}>
	<div class=" flex w-[100%] flex-col items-center justify-center md:w-2/4">
		<div class=" container">
			<label for="admNo" class=" label"> Adm No: </label>
			<input bind:value={adm_no} type="text" id="admNo" name="admNo" class="input" />
		</div>
		<div class=" container">
			<div class=" md:flex md:gap-4">
				<div class=" container">
					<label for="first-name" class="label"> First Name </label>
					<input
						type="text"
						placeholder="Jhon"
						id="first-name"
						name="first-name"
						class="input focus:outline-none"
						required
						bind:value={first_name}
					/>
				</div>
				<div class=" container">
					<label for="last-name" class="label"> Last Name </label>
					<input
						type="text"
						bind:value={last_name}
						placeholder="Doe"
						id="last-name"
						name="last-name"
						class="input"
					/>
				</div>
			</div>
			<div class=" container">
				<label for="father-name" class="label"> Father Name </label>
				<input
					type="text"
					id="father-name"
					bind:value={father_name}
					name="father-name"
					class="input"
					required
				/>
			</div>
			<div class=" container">
				<label for="dob" class="label"> Date of Birth </label>
				<input type="date" id="dob" name="dob" class="input md:w-80" bind:value={dob} required />
			</div>
		</div>
		<div class=" container">
			<div class=" gap-4 md:flex">
				<div class="  flex flex-col">
					<label for="class" class="label"> Class </label>
					<select
						id="class"
						name="class"
						bind:value={student_class}
						required
						class=" input w-40 appearance-none text-center md:w-56"
					>
						<option disabled selected hidden>--</option>
						{#each classes as grades}
							<option value={grades} class=" bg-cyan-900">{grades.toUpperCase()}</option>
						{/each}
					</select>
				</div>
				<div class=" flex flex-col">
					<label for="section" class="label"> Section </label>
					<select
						name="section"
						id="section"
						bind:value={section}
						class="input w-40 appearance-none text-center md:w-56"
					>
						<option disabled selected hidden>--</option>
						{#each sections as section}
							<option value={section} class=" bg-cyan-900">{section}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<button class=" mt-4 w-[100%] bg-cyan-900 p-4 hover:bg-cyan-800/50" type="submit">Add</button>
	</div>
</form>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0.5rem 0;
	}

	.label {
		font-size: 1.25rem;
		margin: 0.25rem;
	}

	@media (max-width: 760px) {
		.label {
			font-size: 1rem;
			margin: 0.25rem;
		}
	}

	.input {
		background: transparent;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: 2px solid blue;
		outline: none;
	}

	.input:focus {
		outline: none;
	}
</style>
