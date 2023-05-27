import { error, redirect } from "@sveltejs/kit";
import { get_url } from "$lib/db/read";

export const GET = async ({ params }) => {
	const url = await get_url(params.shortcut);
	if (url) throw redirect(301, url);
	throw error(404);
};
