import { Redirection } from "./model";

export async function get_url(shortcut: string) {
	const doc = await Redirection.findOne({ shortcut });

	if (!doc) return;

	const increment_visits = async () => {
		doc.visits++;
		await doc.save();
	};

	increment_visits();

	return doc.url;
}
