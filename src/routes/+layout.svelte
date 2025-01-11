<script>
	import { deserialize } from '$app/forms';
	import { goto } from '$app/navigation';
	import '../app.css';

	let { children, data } = $props();

	async function handleLogout(event) {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const response = await fetch('/logout', {
			method: 'POST',
			body: data
		});
		const result = deserialize(await response.text());
	}
</script>

<main class=" main-container flex min-h-screen flex-col">
	<nav>
		{#if data.user}
			<h1>{data.user.name}</h1>
			<form method="post" action="/logout">
				<button>Logout</button>
			</form>
		{:else}
			<a href="/login">Login</a>
		{/if}
	</nav>
	{@render children()}

	<footer>
		<a href="https://github.com/noobMushroom">Created by mushroom</a>
	</footer>
</main>

<style>
	.main-container {
		background: linear-gradient(to right, #000428, #000046);
		color: white;
	}
</style>
