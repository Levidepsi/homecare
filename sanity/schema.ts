import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import settings from "./schemas/settings/settings";
import banner from "./schemas/components/banner";
import home from "./schemas/singleton/home";

const schemas = [
	settings,
	post,
	home,

	// objects
	banner,
];

export default schemas;
