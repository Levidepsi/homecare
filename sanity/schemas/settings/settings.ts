import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
	name: "settings",
	title: "Settings",
	type: "document",
	icon: CogIcon,
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: "title",
			description: "This field is the title of your site.",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "description",
			description: "This field is the description of your site.",
			title: "Description",
			type: "array",
			of: [{ type: "block" }],
		}),

		defineField({
			name: "menuItems",
			title: "Menu Item list ",
			description: "Links displayed on the header of your site.",
			type: "array",
			of: [
				{
					type: "object",
					name: "menu",
					fields: [
						defineField({
							title: "Name",
							name: "name",
							type: "string",
						}),
						defineField({
							title: "Link",
							name: "link",
							type: "string",
						}),
					],
				},
			],
		}),
	],
});
