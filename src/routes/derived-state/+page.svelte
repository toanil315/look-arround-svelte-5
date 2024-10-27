<script lang="ts">
	import Header from '../../components/Header.svelte';

	type Status = 'OPEN' | 'CLOSED';

	let name = $state('toan');
	let fullName = $derived(name + ' ' + 'Dang');
	let fullName2 = $derived.by(() => {
		return name + ' ' + 'Le';
	});
</script>

<Header name={fullName} />
<Header name={fullName2} />

<input class="b rounded-md border border-gray-500 bg-gray-300 p-2" type="text" bind:value={name} />
