<script>
	import { deserialize } from '$app/forms';

	let isShown = $state(false);
	function toggle_is_shown() {
		isShown = !isShown;
	}

	let token = $state('');
	let name = $state('');
	let error = $state('');

	async function handleSumbit(event) {
		event.preventDefault();
		const data_test = new FormData(event.currentTarget);
		const response = await fetch(event.currentTarget.action, {
			method: 'POST',
			body: data_test
		});
		const result = deserialize(await response.text());
		if (result.data.success) {
			token = '';
			window.location.href = '/homepage';
		} else {
			token = '';
			error = result.data.error;
		}
	}
</script>

<div class="  flex grow flex-col items-center justify-center">
	<h1 class=" mb-8 text-center text-4xl md:mb-16">LOGIN</h1>
	<form
		onsubmit={handleSumbit}
		class=" flex flex-col items-center justify-center rounded-lg p-4 shadow md:h-96 md:w-2/5 md:bg-cyan-950/30 md:p-16"
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
			spellcheck="false"
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
