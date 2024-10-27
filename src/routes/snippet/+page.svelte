<script lang="ts">
	interface FormStepSnippetProps {
		title: string;
		id: string;
		type: string;
		onSubmit: () => void;
	}

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

	const QUESTIONS = [
		{
			step: 0,
			question: 'What is your name?',
			type: 'text',
			id: 'name',
			onSubmit: handleFirstStep
		},
		{
			step: 1,
			question: 'What is your birthday?',
			type: 'date',
			id: 'birthday',
			onSubmit: handleSubmit
		}
	];
</script>

<main class="flex flex-col gap-4">
	<p>Step {formState.step}</p>
	{#if formState.step >= QUESTIONS.length}
		<h3 class="font-medium text-green-500">Thank you for submitting the form!</h3>
	{:else}
		{#each QUESTIONS as { id, onSubmit, question, type, step } (id)}
			{#if formState.step === step}
				{@render formStep({ title: question, id, type, onSubmit })}
			{/if}
		{/each}
	{/if}
</main>

{#snippet formStep({ title, id, type, onSubmit }: FormStepSnippetProps)}
	<div>
		<label for={id}>{title}</label>
		<input
			class="rounded-md border border-gray-400 bg-gray-100 p-2"
			{type}
			{id}
			bind:value={formState[id as 'name' | 'birthday']}
		/>
	</div>
	{#if formState.error}
		<p class="text-sm text-red-500">{formState.error}</p>
	{/if}
	<button class="rounded-md bg-blue-500 p-2 text-white" onclick={onSubmit}>Submit</button>
{/snippet}
