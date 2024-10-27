<script lang="ts">
	import { ComplexState } from './complex-state.svelte';

	const myComplexState = new ComplexState();
</script>

<h1>Current value: {myComplexState.value}</h1>
<button class="rounded-md bg-blue-500 p-2 text-white" onclick={() => myComplexState.increment()}
	>+</button
>
<button class="rounded-md bg-blue-500 p-2 text-white" onclick={() => myComplexState.decrement()}
	>-</button
>
<button
	class="rounded-md bg-blue-500 p-2 text-white"
	onclick={() => {
		myComplexState.value = 10;
	}}>Change to 10</button
>
