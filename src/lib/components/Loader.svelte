<div class="flex justify-center py-2" aria-label="loading...">
	<div
		class="ripple w-12 h-12 absolute rounded-full border-[0.2rem] border-white"
	/>
	<div
		class="ripple w-12 h-12 absolute rounded-full border-[0.2rem] border-white"
	/>
</div>

<style>
	.ripple {
		animation: ripple 1.6s ease-out infinite;
	}

	.ripple:nth-child(2) {
		animation-delay: -0.8s;
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
