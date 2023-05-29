import { connect_to_db } from "./connect";
import { id } from "./id";
import { Redirection } from "./model";

export async function create_redirection(
	url: string
): Promise<{ errors: string[] } | { shortcut: string }> {
	const connection = await connect_to_db();
	if (!connection) {
		return { errors: ["No database connection."] };
	}

	const visits = 0;
	const shortcut = id();
	const redirection = new Redirection({ shortcut, url, visits });

	const error = redirection.validateSync();

	if (error) {
		return {
			errors: Object.values(error.errors).map((e) => e.message),
		};
	}

	try {
		await redirection.save();
		return { shortcut };
	} catch (e) {
		console.log(e);
		return { errors: ["Internal server error."] };
	}
}
