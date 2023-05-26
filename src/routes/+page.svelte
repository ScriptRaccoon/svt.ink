<script lang="ts">
	import { slide, fade } from "svelte/transition";
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import Loader from "$lib/components/Loader.svelte";
	import type { ActionData } from "./$types";
	import Button from "$lib/components/Button.svelte";
	import TextInput from "$lib/components/TextInput.svelte";

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

<div class="text-light">
	Yet another tool to create short URLs. Notice that this is a hobby
	project. We do not guarantee that the links will be stored
	forever.
</div>

<form
	class="text-lg my-4 flex flex-col gap-3 transition-opacity duration-200"
	class:opacity-70={loading}
	method="POST"
	autocomplete="off"
	use:enhance
	on:submit={() => (loading = true)}
>
	<div>
		<TextInput
			label="URL"
			name="url"
			value={form?.url ?? ""}
			disabled={loading}
		/>
		<!-- <label for="url">URL</label>
		<input
			type="text"
			id="url"
			name="url"
			value={form?.url ?? ""}
			disabled={loading}
		/> -->
	</div>
	<div>
		<Button disabled={loading}>Create short URL</Button>
	</div>
</form>

<div aria-live="polite">
	{#if loading}
		<Loader />
	{:else if form?.errors}
		<section in:fade={transition_options} aria-label="errors">
			{#each form.errors as error}
				<div class="text-error">
					{error}
				</div>
			{/each}
		</section>
	{:else if form?.shortcut}
		<section
			in:fade={transition_options}
			aria-label="result"
			class="text-lg mt-8"
		>
			<div>Success! The short URL is:</div>

			<div class="mb-4">
				<a href={short_url}>
					{short_url}
				</a>
			</div>

			<Button on:click={copy_url}>Copy</Button>

			{#if show_confirmation}
				<div
					class="text-light mt-1"
					transition:slide={transition_options}
				>
					Copied short URL to clipboard!
				</div>
			{/if}
		</section>
	{/if}
</div>
