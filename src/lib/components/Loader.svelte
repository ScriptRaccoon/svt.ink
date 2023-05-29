<div class="loader" aria-label="loading...">
	<div class="wave" />
	<div class="wave" />
</div>

<style>
	.loader {
		--size: 3rem;
		--duration: 1.6s;
		display: flex;
		justify-content: center;
		height: var(--size);
		margin-block: 0.5rem;
	}

	.wave {
		width: var(--size);
		height: var(--size);
		position: absolute;
		border-radius: 50%;
		border: 0.2rem solid white;
		animation: ripple var(--duration) ease-out infinite;
	}

	.wave:nth-child(2) {
		animation-delay: calc(-0.5 * var(--duration));
	}

	@keyframes ripple {
		from {
			scale: 0;
			opacity: 1;
		}
		to {
			scale: 1;
			opacity: 0;
		}
	}
</style>
