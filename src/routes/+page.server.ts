import { fail } from "@sveltejs/kit";
import { create_redirection } from "$lib/db/create";

export const actions = {
	default: async (event) => {
		const form_data = await event.request.formData();
		const url = form_data.get("url") as string;

		const redirection = await create_redirection(url);

		if ("errors" in redirection)
			return fail(400, { ...redirection, url });

		return { ...redirection, url };
	},
};
