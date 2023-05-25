import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { create_redirection } from "$lib/db/create";

export const actions: Actions = {
	default: async (event) => {
		const form_data = await event.request.formData();
		const url = form_data.get("url") as string;
		const redirection = await create_redirection(url);
		await new Promise<void>((res) =>
			setTimeout(() => {
				res();
			}, 2000)
		); // remove later

		if ("errors" in redirection)
			return fail(400, { ...redirection, url });
		return { ...redirection, url };
	},
};
