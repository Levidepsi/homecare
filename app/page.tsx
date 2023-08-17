import Homepage from "@/components/pages/Homepage";
import { getHomepage } from "@/lib/sanity.client";
import Image from "next/image";

export default async function Home() {
	const data = await getHomepage();

	return (
		<>
			<Homepage data={data} />
		</>
	);
}

export async function generateStaticParams() {
	return [
		{ slug: "/" }, // -> lets cache these pages as they will never change!
	];
}
