<script lang="ts">
	export let disabled = false;
</script>

<button
	on:click
	{disabled}
	class="rounded bg-orange-700 py-1 px-3
           disabled:cursor-not-allowed
           outline-none
           focus-visible:outline-1
           focus-visible:outline-offset-2
           focus-visible:outline-white"
>
	<slot />
</button>
