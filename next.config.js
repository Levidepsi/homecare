/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
		NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,

		NEXT_PUBLIC_PUBLIC_ID: process.env.NEXT_PUBLIC_PUBLIC_ID,
	},
	images: {
		domains: ["cdn.sanity.io"],
	},
};

module.exports = nextConfig;
