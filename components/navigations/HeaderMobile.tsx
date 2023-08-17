"use client";
import Link from "next/link";
import React from "react";

const HeaderMobile = (menu: any, openMenu: any, setOpenMenu: any) => {
	const closeSideBar = () => {
		setOpenMenu(false);
	};
	return (
		<>
			<div>
				<button onClick={closeSideBar}>close</button>
				<div className={`${openMenu ? "block" : "hidden"}`}>
					<ul>
						{menu.menu.map((item: any, i: number) => {
							return (
								<>
									<li key={i}>
										<Link href={item.link}>{item.name}</Link>
									</li>
									asdadasdasd
								</>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default HeaderMobile;
