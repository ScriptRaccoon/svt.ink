import { customAlphabet } from "nanoid";

const alphabet =
	"0123456789" +
	"abcdefghijklmnopqrstuvwxyz" +
	"ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const id = customAlphabet(alphabet, 6);
