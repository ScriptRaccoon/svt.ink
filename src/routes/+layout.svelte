<script lang="ts">
	import "$lib/styles/app.css";
</script>

<svelte:head>
	<title>Shorty</title>
</svelte:head>

<header>
	<h1>Shorty</h1>
</header>

<main>
	<slot />
</main>

<footer>
	<a href="https://github.com/scriptraccoon/shorty" target="_blank"
		>GitHub</a
	>
</footer>

<style>
	h1 {
		padding-block: 1.5rem;
		font-weight: 600;
		line-height: 1.2;
		text-align: center;
		text-transform: uppercase;
		font-size: 1.25rem;
		font-style: italic;
		letter-spacing: 0.05rem;
	}

	main {
		width: min(95vw, 32rem);
		margin: 0 auto;
	}

	footer {
		font-size: 1rem;
		text-align: center;
		margin-top: auto;
		padding: 1rem;
		opacity: 0.75;
	}
</style>
