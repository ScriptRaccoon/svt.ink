<script lang="ts">
	import "$lib/styles/app.css";
</script>

<svelte:head>
	<title>Svt.Ink</title>
</svelte:head>

<header>
	<h1>Svt.Ink</h1>
</header>

<main>
	<slot />
</main>

<footer>
	<a href="https://github.com/scriptraccoon/svt.ink" target="_blank"
		>GitHub</a
	>
</footer>

<style>
	header {
		padding-block: 2rem;
	}
	h1 {
		font-weight: 600;
		line-height: 1.2;
		text-align: center;
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
