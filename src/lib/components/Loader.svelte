<div class="container" aria-label="loading...">
	<div class="loader">
		<div />
		<div />
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		padding-block: 0.5rem;
	}
	.loader {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 3rem;
		height: 3rem;
	}

	.loader div {
		position: absolute;
		border: 0.2rem solid #fff;
		border-radius: 50%;
		animation: loader 1.6s ease-out infinite;
	}

	.loader div:nth-child(2) {
		animation-delay: -0.8s;
	}

	@keyframes loader {
		0% {
			width: 0;
			height: 0;
			opacity: 1;
		}
		100% {
			width: 100%;
			height: 100%;
			opacity: 0;
		}
	}
</style>
