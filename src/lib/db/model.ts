import mongoose from "mongoose";

const url_regexp =
	/^(https?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;

const url_message =
	"You have to provide a valid URL. In particular, it should start with http(s).";

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

export const Redirection = mongoose.model("redirection", schema);
