import mongoose from "mongoose";
import { SECRET_MONGODB_URL } from "$env/static/private";

export async function connect_to_db() {
	try {
		return await mongoose.connect(SECRET_MONGODB_URL);
	} catch (err) {
		console.log(err);
	}
}
