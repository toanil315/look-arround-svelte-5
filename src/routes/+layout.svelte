<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="mx-auto flex max-w-4xl flex-col gap-4 p-4">
	<div class="flex items-center justify-between text-blue-500">
		<a href="/">Home</a>
		<a href="/derived-state">Derived State</a>
		<a href="/logic">Logic</a>
		<a href="/snippet">Snippet</a>
		<a href="/effect">Effect</a>
		<a href="/complex-state">Complex State</a>
	</div>

	{@render children()}
</div>
