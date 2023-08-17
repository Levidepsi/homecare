"use client";

import { Key } from "react";
import Banner from "../shared/Banner";

export default function SpreadComponent({ components }: any) {
	console.log(components);
	return (
		<>
			{components &&
				components.map(
					(component: {
						_key: Key | null | undefined;
						title: any;
						_type: string | number;

						banner: { url: string };
					}) => (
						<div key={component._key}>
							{
								{
									banner: (
										<Banner
											key={component._key}
											title={component.title}
											banner={component.banner}
										/>
									),
								}[component._type]
							}
						</div>
					)
				)}
		</>
	);
}
