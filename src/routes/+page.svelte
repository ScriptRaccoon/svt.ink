<script lang="ts">
	import { slide, fade } from "svelte/transition";
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import Loader from "$lib/components/Loader.svelte";
	import type { ActionData } from "./$types";

	export let form: ActionData;

	const transition_options = { duration: 150 };

	let show_confirmation = false;

	$: short_url = `${$page.url.origin}/${form?.shortcut}`;

	async function copy_url() {
		await window.navigator.clipboard.writeText(short_url);
		show_confirmation = true;
		setTimeout(() => (show_confirmation = false), 1500);
	}

	let loading = false;

	$: {
		if (form) loading = false;
	}
</script>

<div class="teaser">
	Yet another tool to create short URLs. Notice that this is a hobby
	project. We do not guarantee that the links will be stored
	forever.
</div>

<form
	class="form"
	method="POST"
	autocomplete="off"
	use:enhance
	on:submit={() => (loading = true)}
	class:loading
>
	<div>
		<label for="url">URL</label>
		<input
			type="text"
			id="url"
			name="url"
			value={form?.url ?? ""}
			disabled={loading}
		/>
	</div>
	<div>
		<button disabled={loading}>Create short URL</button>
	</div>
</form>

<div aria-live="polite">
	{#if loading}
		<Loader />
	{:else if form?.errors}
		<section
			in:fade={transition_options}
			aria-label="errors"
			class="error"
		>
			{#each form.errors as error}
				<div>{error}</div>
			{/each}
		</section>
	{:else if form?.shortcut}
		<section
			in:fade={transition_options}
			aria-label="result"
			class="result"
		>
			<div>Success! The short URL is:</div>

			<div>
				<a href={short_url}>
					{short_url}
				</a>
			</div>

			<div class="copy">
				<button on:click={copy_url}>Copy</button>

				{#if show_confirmation}
					<div
						class="confirmation"
						transition:slide={transition_options}
					>
						Copied short URL to clipboard!
					</div>
				{/if}
			</div>
		</section>
	{/if}
</div>

<style>
	.teaser {
		color: var(--dark-font-color);
	}

	.form {
		font-size: 1.25rem;
		margin-block: 1rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: opacity 200ms linear;
	}

	.form.loading {
		opacity: 0.75;
	}

	.result {
		margin-top: 2rem;
		font-size: 1.25rem;
	}

	.error {
		color: var(--error-color);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.copy {
		margin-top: 1rem;
	}

	.confirmation {
		margin-top: 0.25rem;
		color: var(--dark-font-color);
	}
</style>
