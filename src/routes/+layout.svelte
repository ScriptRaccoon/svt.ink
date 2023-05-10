<script lang="ts">
	import "$lib/styles/app.css";
	import Header from "$lib/components/Header.svelte";
</script>

<svelte:head>
	<title>Svt.Ink</title>
	<meta property="og:title" content="Svt.Ink" />
	<meta
		property="og:description"
		content="Yet another tool to create short URLs."
	/>
	<meta
		name="description"
		content="Yet another tool to create short URLs."
	/>
	<meta property="og:type" content="Website" />
	<meta property="og:url" content="https://svt.ink" />
	<meta property="og:site_name" content="Svt.Ink" />
</svelte:head>

<Header />

<main>
	<slot />
</main>

<style>
	main {
		max-width: 32rem;
		margin: 0 auto;
		padding-inline: 1rem;
	}
</style>
