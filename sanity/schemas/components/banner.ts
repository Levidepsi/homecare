import { defineField, defineType } from "sanity";

export default defineType({
	name: "banner",
	type: "object",
	title: "Banner",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
		}),

		defineField({
			name: "image",
			title: "Image",
			type: "image",
		}),

		defineField({
			name: "video",
			title: "Video",
			type: "file",
		}),
	],
});
