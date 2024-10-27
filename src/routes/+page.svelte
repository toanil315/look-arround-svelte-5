<script lang="ts">
	import Header from '../components/Header.svelte';

	type Status = 'OPEN' | 'CLOSED';

	let name = $state('toan');
	let status: Status = $state('OPEN');

	function handleChangeStatus() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<Header {name} />

<input class="b rounded-md border border-gray-500 bg-gray-300 p-2" type="text" bind:value={name} />

<p>Status: {status}</p>
<button class="rounded-md bg-blue-500 p-2 text-white" onclick={handleChangeStatus}
	>Change Status</button
>
