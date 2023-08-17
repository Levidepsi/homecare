import Image from "next/image";
import React from "react";

const Banner = ({ banner, title }: { banner: any; title: string }) => {
	console.log(banner);
	return (
		<div className='relative banner'>
			<Image
				src={`${banner}`}
				alt=''
				height={2000}
				width={2000}
				className='h-full w-full  object-cover relative'
			/>
			<div className='absolute z-10 top-[50%]'>
				<h1>{title}</h1>
			</div>
		</div>
	);
};

export default Banner;
