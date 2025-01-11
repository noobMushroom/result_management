<script>
	let { children, data } = $props();
</script>

<div class="flex grow flex-col">
	<nav>
		<h1>{data.user.name}</h1>
	</nav>
	{@render children()}
</div>
