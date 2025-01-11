<script>
	let props = $props();
</script>

<div
	class="  mx-2 my-7 bg-cyan-900/50 p-6 text-center text-xl shadow hover:bg-cyan-800/70 md:m-4 md:h-56 md:w-56 md:rounded-3xl"
>
	<a href={props.link} class="flex h-full w-full flex-col items-center justify-center">
		<h1>{props.title}</h1>
	</a>
</div>
