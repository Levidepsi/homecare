import { createClient, groq } from "next-sanity";

import SanityClient from "next-sanity-client";

export const client = new SanityClient({
	projectId: `${process.env.SANITY_API_PROJECT_ID}`,
	dataset: `${process.env.SANITY_STUDIO_API_DATASET}`,
	useCdn: false,
});

export const getHomepage = () => {
	return client.fetch({
		query: groq`*[_type == "home"][0]  {
			title,
			slug,
			components[]{
				...,
				"banner": image.asset->url
			}
		}`,
	});
};

export const getNavigation = async () => {
	return client.fetch({
		query: groq`*[_type == "settings"][0]  {
    menuItems[]{
      name,
      link
    },
		}`,
	});
};
