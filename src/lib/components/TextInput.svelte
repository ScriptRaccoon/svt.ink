<script lang="ts">
	export let label = "";
	export let disabled = false;
	export let value = "";
	export let name = "";
	const id = Math.random().toString(36).slice(-6);
</script>

<label for={id}>
	{label}
</label>

<input
	type="text"
	{id}
	{name}
	{disabled}
	bind:value
	class="block w-full rounded p-2
	       bg-white text-black outline-none
		   disabled:cursor-not-allowed
		   focus-visible:outline-1
		   focus-visible:outline-offset-2
		   focus-visible:outline-white"
/>
