import mongoose from "mongoose";

const url_regexp =
	/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const url_message =
	"You have to provide a valid URL. It has to start with http(s).";

const schema = new mongoose.Schema({
	shortcut: {
		type: String,
		required: [true, "Shortcut is required."],
		unique: true,
	},
	url: {
		type: String,
		required: [true, "URL is required."],
		validate: {
			validator: (url: string) => url.match(url_regexp),
			message: () => url_message,
		},
	},
});

const is_dev = process.env.NODE_ENV === "development";
const model_name = is_dev ? "[dev] redirection" : "redirection";

export const Redirection = mongoose.model(model_name, schema);
