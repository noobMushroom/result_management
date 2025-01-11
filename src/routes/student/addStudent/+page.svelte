<script>
	const classes = ['nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8'];
	const sections = ['A', 'B', 'C', 'D'];
</script>

<form class="   flex grow flex-col items-center justify-center p-4">
	<div class=" flex w-[100%] flex-col items-center justify-center md:w-2/4">
		<div class=" container">
			<label for="admNo" class=" label"> Adm No: </label>
			<input type="text" id="admNo" name="admNo" class="input" />
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
					/>
				</div>
				<div class=" container">
					<label for="last-name" class="label"> Last Name </label>
					<input type="text" placeholder="Doe" id="last-name" name="last-name" class="input" />
				</div>
			</div>
			<div class=" container">
				<label for="father-name" class="label"> Father Name </label>
				<input type="text" id="father-name" name="father-name" class="input" required />
			</div>
			<div class=" container">
				<label for="dob" class="label"> Date of Birth </label>
				<input type="date" id="dob" name="dob" class="input md:w-80" required />
			</div>
		</div>
		<div class=" container">
			<div class=" gap-4 md:flex">
				<div class="  flex flex-col">
					<label for="class" class="label"> Class </label>
					<select id="class" name="class" class=" input w-40 appearance-none text-center md:w-56">
						<option disabled selected hidden>--</option>
						{#each classes as grades}
							<option value={grades} class=" bg-cyan-900">{grades.toUpperCase()}</option>
						{/each}
					</select>
				</div>
				<div class=" flex flex-col">
					<label for="section" class="label"> Section </label>
					<select name="setion" id="section" class="input w-40 appearance-none text-center md:w-56">
						<option disabled selected hidden>--</option>
						{#each sections as section}
							<option value={section} class=" bg-cyan-900">{section}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<button class=" mt-4 w-[100%] bg-cyan-900 p-4 hover:bg-cyan-800/50">Add</button>
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
