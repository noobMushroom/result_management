<script>
	import { deserialize } from '$app/forms';
	import { goto } from '$app/navigation';

	let isShown = $state(false);
	function toggle_is_shown() {
		isShown = !isShown;
	}

	let token = $state('');
	let name = $state('');
	let error = $state('');

	async function handleSumbit(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data
		});
		const result = deserialize(await response.text());
		if (result.data.success) {
			token = '';
			goto('/homepage');
		} else {
			token = '';
			error = result.data.error;
		}
	}
</script>

<div class="  flex grow flex-col items-center">
	<h1 class=" my-32 text-center text-4xl">LOGIN</h1>
	<form
		onsubmit={handleSumbit}
		class=" flex h-96 flex-col items-center justify-center rounded-lg p-16 shadow md:w-2/5 md:bg-cyan-950/30"
	>
		<div class="flex w-[100%] flex-col">
			<label for="token"> Login Token: </label>
			<div class="  relative my-4 flex w-[100%]">
				<input
					id="token"
					type={isShown ? 'text' : 'password'}
					name="token"
					bind:value={token}
					required
					class="   w-[100%] bg-transparent hover:border-teal-600 {error
						? 'border-red-500 outline-red-500'
						: ' '}"
				/>
				<button onclick={toggle_is_shown} type="button" class=" absolute right-[10px] top-1/4">
					{#if !isShown}
						<i class="fa-regular fa-eye"></i>
					{:else}
						<i class="fa-regular fa-eye-slash"></i>
					{/if}
				</button>
			</div>
		</div>
		<div class=" flex w-[100%] flex-col">
			<label for="name"> Name: </label>
			<input
				id="name"
				bind:value={name}
				class="  my-4 w-[100%] bg-transparent shadow-none hover:border-teal-600"
				type="text"
				name="name"
				autocomplete="name"
				required
			/>
		</div>
		<button
			type="submit"
			class=" my-4 w-[100%] rounded-lg bg-sky-700 py-3 text-xl hover:bg-sky-800/50">Login</button
		>
		{#if error}
			<p class="  mt-4 text-center text-red-400">
				<i class="fa-solid fa-triangle-exclamation"></i>
				{error}
			</p>
		{/if}
	</form>
</div>
