<script lang="ts">
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import Loader from "$lib/components/Loader.svelte";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	$: short_url = `${$page.url.origin}/${form?.shortcut}`;

	let show_confirmation = false;

	async function copy_url() {
		await window.navigator.clipboard.writeText(short_url);
		show_confirmation = true;
		setTimeout(() => (show_confirmation = false), 1200);
	}

	let loading = false;

	$: {
		if (form) loading = false;
	}
</script>

<p class="teaser">
	Yet another tool to create short URLs. Notice that this is a hobby
	project. We do not guarantee that the links will be stored
	forever.
</p>

<form
	class="form"
	method="POST"
	autocomplete="off"
	use:enhance
	on:submit={() => (loading = true)}
>
	<p>
		<label
			>URL<input
				type="text"
				name="url"
				value={form?.url ?? ""}
			/>
		</label>
	</p>
	<p>
		<button>Create short URL</button>
	</p>
</form>

{#if loading}
	<Loader />
{/if}

<div aria-live="assertive" class="error">
	{#each form?.errors ?? [] as error}
		<p>{error}</p>
	{/each}
</div>

<div aria-live="polite" class="result">
	{#if form?.shortcut}
		<div>Success! The short URL is:</div>
		<p>
			<a href={short_url}>
				{short_url}
			</a>
		</p>

		<div>
			<button on:click={copy_url}> Copy </button>
		</div>

		{#if show_confirmation}
			<div class="confirmation">
				Copied short URL to clipboard!
			</div>
		{/if}
	{/if}
</div>

<style>
	.teaser {
		font-size: 1rem;
		color: var(--dark-font-color);
	}

	button,
	input {
		font-family: inherit;
		font-size: inherit;
		border: none;
		color: inherit;
		border-radius: 0.25rem;
	}

	button {
		background-color: var(--accent-color);
		padding: 0.25rem 0.6rem;
		cursor: pointer;
	}

	button:focus-visible {
		outline: 1px solid var(--font-color);
	}

	button:disabled,
	input:disabled {
		cursor: not-allowed;
	}

	input {
		padding: 0.4rem;
		display: block;
		width: 100%;
		background-color: var(--font-color);
		color: var(--bg-color);
		margin-block: 0.2rem;
	}

	input:focus-visible {
		outline: 1px solid var(--font-color);
		outline-offset: 1px;
	}

	.form {
		font-size: 1.25rem;
		margin-top: 1rem;
	}

	.error {
		color: var(--error-color);
	}

	.result {
		font-size: 1.25rem;
		padding-top: 1.5rem;
	}

	p {
		margin-bottom: 1rem;
	}

	.confirmation {
		font-size: 1rem;
		margin-top: 0.25rem;
	}
</style>
