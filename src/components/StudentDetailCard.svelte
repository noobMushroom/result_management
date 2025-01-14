<script>
	let props = $props();
</script>

<div class=" shodow m-4 flex justify-between p-4 md:rounded-lg md:bg-sky-900/30">
	<div class=" flex flex-col justify-between gap-4 p-4">
		<div>
			<h1 class=" text-zinc-400">Adm No: {props.admNo}</h1>
		</div>
		<div class=" text-5xl font-black text-rose-600">
			<h1>{props.firstName} {props.lastName}</h1>
		</div>
		<div class=" "><h1>{props.dob}</h1></div>
		<div class=" text-2xl font-extrabold text-rose-600">
			<h1>
				{props.class}
				{#if props.section}
					({props.section})
				{/if}
			</h1>
		</div>
		<div class=" text-xl font-medium text-rose-100">
			<h1>{props.fatherName}</h1>
		</div>
	</div>
	<div class=" text-2xl">
		<a href="/student/edit/{props.id}" class=" m-4 hover:text-rose-500" aria-label="edit button"
			><i class="fa-regular fa-pen-to-square"></i></a
		>
		<button
			aria-label="delete button"
			class=" m-4 hover:text-sky-500"
			onclick={() => props.handleDelete(props.id)}><i class="fa-solid fa-trash"></i></button
		>
	</div>
</div>
