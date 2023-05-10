import type { LayoutServerLoad } from "./$types";
import { error } from "@sveltejs/kit";
import { connect_to_db } from "$lib/db/connect";

export const load: LayoutServerLoad = async () => {
	const connection = await connect_to_db();
	if (!connection) throw error(500, "No database connection");
};
