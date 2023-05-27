import { connect_to_db } from "./connect";
import { Redirection } from "./model";
import { customAlphabet } from "nanoid";

export const alphabet =
	"0123456789" +
	"abcdefghijklmnopqrstuvwxyz" +
	"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const nanoid = customAlphabet(alphabet, 6);

export async function create_redirection(
	url: string
): Promise<{ errors: string[] } | { shortcut: string }> {
	const connection = await connect_to_db();
	if (!connection) {
		return { errors: ["No database connection"] };
	}

	const visits = 0;
	const shortcut = nanoid();
	const redirection = new Redirection({ shortcut, url, visits });

	const error = redirection.validateSync();

	if (error) {
		const error_objects = Object.values(error.errors);
		const errors = error_objects.map((e) => e.message);
		return { errors };
	}

	await redirection.save();

	return { shortcut };
}
