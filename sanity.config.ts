/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import schema from "./sanity/schema";

export default defineConfig({
	name: "default",
	title: "Home Care ",

	basePath: "/studio",
	projectId: "k71q3t8g",
	dataset: "production",
	// Add and edit the content schema in the './sanity/schema' folder
	schema: {
		types: schema,
	},
	plugins: [
		deskTool({
			structure: (S, context) =>
				S.list()
					.title("Content")
					.items([
						// Our singleton type has a list item with a custom child
						S.listItem().title("Home").id("home").child(
							// Instead of rendering a list of documents, we render a single
							// document, specifying the `documentId` manually to ensure
							// that we're editing the single instance of the document
							S.document().schemaType("home").documentId("home")
						),
						S.listItem().title("Settings").id("settings").child(
							// Instead of rendering a list of documents, we render a single
							// document, specifying the `documentId` manually to ensure
							// that we're editing the single instance of the document
							S.document().schemaType("settings").documentId("settings")
						),
						// Regular document types
						// S.documentTypeListItem("page").title("Page"),
						// S.documentTypeListItem("navigation").title("Navigation"),
						// S.documentTypeListItem("footer").title("Footer"),
						// S.documentTypeListItem("news").title("News"),
						// orderableDocumentListDeskItem({
						// 	type: "post",
						// 	title: "Post",
						// 	id: "orderable-posts",
						// 	// pass from the structure callback params above
						// 	S,
						// 	context,
						// }),
					]),
		}),
		// Vision is a tool that lets you query your content with GROQ in the studio
		// https://www.sanity.io/docs/the-vision-plugin
		visionTool({ defaultApiVersion: apiVersion }),
	],
});
