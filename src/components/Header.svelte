<script lang="ts">
	interface Props {
		name: string;
	}

	let { name }: Props = $props();
</script>

<h1>Hello {name}</h1>
<p>Javascript Expression: {name.replace('t', 'X')}</p>
