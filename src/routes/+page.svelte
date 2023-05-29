<script lang="ts">
	import { enhance } from "$app/forms";
	import Button from "$lib/components/Button.svelte";
	import TextInput from "$lib/components/TextInput.svelte";
</script>

<div class="text-light">
	Yet another tool to create short URLs. Notice that this is a hobby
	project. We do not guarantee that the links will be stored
	forever.
</div>

<form
	class="text-lg my-4 flex flex-col gap-3"
	method="POST"
	autocomplete="off"
	use:enhance
>
	<div>
		<TextInput label="URL" name="url" />
	</div>
	<div>
		<Button>Create short URL</Button>
	</div>
</form>
