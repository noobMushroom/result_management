<script>
	import { fly } from 'svelte/transition';
	import { all_classes as classes, all_sections as sections } from '$lib/class_data.js';
	let props = $props();
</script>

{#if props.showSuccess}
	<div class=" z-10 flex w-[100%] justify-center">
		<p
			class=" left-1/2 w-72 rounded bg-green-500 p-4 text-center text-white shadow"
			transition:fly={{ y: 200, duration: 2000 }}
		>
			successfully Added
		</p>
	</div>
{/if}
<div class=" flex grow flex-col justify-center">
	<h1 class=" mb-4 text-center text-4xl font-black text-rose-700">{props.formType} Student</h1>
	<form
		autocomplete="off"
		class="   flex flex-col items-center justify-center p-4"
		onsubmit={props.handleSubmit}
	>
		{#if props.id}
			<input type="hidden" name="id" value={props.id} />
		{/if}
		<div class=" flex w-[100%] flex-col items-center justify-center md:w-2/4">
			<div class=" container">
				<label for="admNo" class=" label"> Adm No: </label>
				<input value={props.admNo} type="text" id="admNo" name="admNo" class="input" />
			</div>
			<div class=" container">
				<div class=" md:flex md:gap-4">
					<div class=" container">
						<label for="firstName" class="label"> First Name </label>
						<input
							type="text"
							placeholder="Jhon"
							id="firstName"
							name="firstName"
							class="input focus:outline-none"
							required
							value={props.firstName}
						/>
					</div>
					<div class=" container">
						<label for="lastName" class="label"> Last Name </label>
						<input
							type="text"
							value={props.lastName}
							placeholder="Doe"
							id="lastName"
							name="lastName"
							class="input"
						/>
					</div>
				</div>
				<div class=" container">
					<label for="fatherName" class="label"> Father Name </label>
					<input
						type="text"
						id="fatherName"
						value={props.fatherName}
						name="fatherName"
						class="input"
						required
					/>
				</div>
				<div class=" container">
					<label for="dob" class="label"> Date of Birth </label>
					<input type="date" id="dob" name="dob" class="input md:w-80" value={props.dob} required />
				</div>
			</div>
			<div class=" container">
				<div class=" gap-4 md:flex">
					<div class="  flex flex-col">
						<label for="class" class="label"> Class </label>
						<select
							id="class"
							name="class"
							value={props.class}
							required
							class=" input w-40 appearance-none text-center md:w-56"
						>
							<option disabled selected hidden>--</option>
							{#each classes as grades}
								<option value={grades} class=" bg-cyan-900">{grades}</option>
							{/each}
						</select>
					</div>
					<div class=" flex flex-col">
						<label for="section" class="label"> Section </label>
						<select
							name="section"
							id="section"
							value={props.section}
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
			<button class=" mt-4 w-[100%] bg-cyan-900 p-4 hover:bg-cyan-800/50" type="submit"
				>{props.formType} Student</button
			>
		</div>
	</form>
</div>

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
