<script lang="ts">
	import "$lib/styles/app.css";
	import Header from "$lib/components/Header.svelte";
</script>

<Header />

<main class="max-w-lg mx-auto px-4">
	<slot />
</main>
