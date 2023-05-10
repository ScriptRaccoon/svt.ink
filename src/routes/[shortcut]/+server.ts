import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { get_url } from "$lib/db/read";

export const GET: RequestHandler = async ({ params }) => {
	const { shortcut } = params;
	const url = await get_url(shortcut);
	if (url) throw redirect(301, url);
	throw error(404);
};
