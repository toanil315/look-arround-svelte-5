<script lang="ts">
	let formState = $state({
		name: '',
		birthday: '',
		step: 0,
		error: ''
	});

	function handleFirstStep() {
		if (!formState.name) {
			formState.error = 'Name is required';
			return;
		}

		formState.error = '';
		formState.step = 1;
	}

	function handleSubmit() {
		if (!formState.birthday) {
			formState.error = 'Birthday is required';
			return;
		}

		formState.error = '';
		formState.step = 2;
	}
</script>

<main class="flex flex-col gap-4">
	<p>Step {formState.step}</p>
	{#if formState.error}
		<p class="text-sm text-red-500">{formState.error}</p>
	{/if}
	{#if formState.step === 0}
		<div>
			<label for="name">Name</label>
			<input
				class="rounded-md border border-gray-400 bg-gray-100 p-2"
				type="text"
				id="name"
				bind:value={formState.name}
			/>
		</div>
		<button class="rounded-md bg-blue-500 p-2 text-white" onclick={handleFirstStep}>Next</button>
	{:else if formState.step === 1}
		<div>
			<label for="birthday">Birthday</label>
			<input
				class="rounded-md border border-gray-400 bg-gray-100 p-2"
				type="date"
				id="birthday"
				bind:value={formState.birthday}
			/>
		</div>
		<button class="rounded-md bg-blue-500 p-2 text-white" onclick={handleSubmit}>Submit</button>
	{/if}
</main>
