<script>
	let { children } = $props();
</script>

<div class="flex grow flex-col">
	{@render children()}
</div>
