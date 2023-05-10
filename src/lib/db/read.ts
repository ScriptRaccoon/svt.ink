import { Redirection } from "./model";

export async function get_url(shortcut: string) {
	const doc = await Redirection.findOne({ shortcut });
	return doc?.url;
}
