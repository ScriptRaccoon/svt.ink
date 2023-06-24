import { PUBLIC_DOMAIN } from "$env/static/public";
import mongoose from "mongoose";

const url_regexp =
	/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,})/gi;

const url_message = `You have to provide a valid URL. It has to start with http(s). Also, it is not allowed to start with ${PUBLIC_DOMAIN}.`;

function url_validator(url: string): boolean {
	return (
		!!url.match(url_regexp) &&
		!url.startsWith("http://" + PUBLIC_DOMAIN) &&
		!url.startsWith("https://" + PUBLIC_DOMAIN)
	);
}

const schema = new mongoose.Schema(
	{
		shortcut: {
			type: String,
			required: [true, "Shortcut is required."],
			unique: true,
		},
		url: {
			type: String,
			required: [true, "URL is required."],
			validate: {
				validator: url_validator,
				message: () => url_message,
			},
		},
		visits: {
			type: Number,
			required: [true, "Number of visits is required."],
			min: 0,
		},
	},
	{ timestamps: true }
);

export const Redirection = mongoose.model("redirection", schema);
