import { HomeIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
	name: "home",
	title: "Home",
	type: "document",
	icon: HomeIcon,
	// Uncomment below to have edits publish automatically as you type
	// liveEdit: true,
	fields: [
		defineField({
			name: "title",
			description: "This field is the title of your personal website.",
			title: "Title",
			type: "string",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
				isUnique: (value, context) => context.defaultIsUnique(value, context),
			},
			validation: (rule) => rule.required(),
		}),

		defineField({
			name: "featureImage",
			title: "Feature Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),

		// Components
		defineField({
			title: "Components",
			name: "components",
			type: "array",
			of: [
				{
					title: "Banner",
					type: "banner",
				},
			],
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title }) {
			return {
				subtitle: "Home",
				title,
			};
		},
	},
});
