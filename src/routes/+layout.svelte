<script>
	import '../app.css';

	let { children } = $props();
</script>

<main class=" main-container flex min-h-screen flex-col to-black">
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
