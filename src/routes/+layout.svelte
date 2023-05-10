<script lang="ts">
	import "$lib/styles/app.css";
	import Header from "$lib/components/Header.svelte";
</script>

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
