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
		setTimeout(() => (show_confirmation = false), 2000);
	}

	let loading = false;

	$: {
		if (form) loading = false;
	}
</script>

<h2>Create short URL</h2>

<form
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
		<button>Submit</button>
	</p>
</form>

<!-- {#if loading} -->
<Loader />
<!-- {/if} -->

<div aria-live="assertive">
	{#each form?.errors ?? [] as error}
		<p class="error">{error}</p>
	{/each}
</div>

<div aria-live="polite" class="result">
	{#if form?.shortcut}
		<p>Success! The short URL is:</p>

		<p>
			<a href={short_url}>
				{short_url}
			</a>
		</p>

		<div>
			<button on:click={copy_url}>Copy</button>
		</div>

		{#if show_confirmation}
			<div class="confirmation">
				Copied short URL to clipboard!
			</div>
		{/if}
	{/if}
</div>

<style>
	h2 {
		padding-bottom: 1.5rem;
		font-weight: 600;
		line-height: 1.2;
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
		padding: 0.2rem 0.4rem;
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

	.error {
		color: var(--error-color);
	}

	.result {
		padding-top: 1.5rem;
	}

	p {
		margin-bottom: 1rem;
	}

	.confirmation {
		font-size: 1rem;
	}
</style>
