"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderMobile from "./HeaderMobile";

const Header = ({ header }: { header: any }) => {
	const [openMenu, setOpenMenu] = useState(false);

	const openSideBar = () => {
		setOpenMenu(true);
	};

	const closeSideBar = () => {
		setOpenMenu(false);
	};

	return (
		<AnimatePresence>
			<header>
				<div className='border-b-2 border-solid border-[#d3cccc6e] pb-5  w-full '>
					<div
						className={`pt-[30px] px-5 lg:px-0 flex items-center justify-between`}
					>
						<div className='px-5 lg:px-0 flex lg:flex-row flex-row-reverse justify-between lg:max-w-[1300px] lg:mx-auto w-full  items-center  '>
							<motion.div
								className='w-full lg:w-auto'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.5,
									ease: [0.19, 1, 0.22, 1],
								}}
								viewport={{ once: true }}
							>
								<Link href={"/"}>
									{/* <Image
									src={`/main-logo.png`}
									alt=''
									width={1000}
									height={1000}
									className='h-auto w-[180px] md:w-[250px] object-cover'
								/> */}
									<motion.h1
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{
											duration: 0.5,
											ease: [0.19, 1, 0.22, 1],
										}}
										viewport={{ once: true }}
										className='text-[35px] font-serif'
									>
										HCare
									</motion.h1>
								</Link>
							</motion.div>

							<div className=' '>
								<ul className='lg:flex hidden gap-10 '>
									{header.menuItems.map(
										(menu: { link: string; name: string }, i: number) => {
											return (
												<>
													<motion.li
														initial={{ opacity: 0, x: -10, y: -10 }}
														animate={{ opacity: 1, x: 0, y: 0 }}
														exit={{ opacity: 0 }}
														transition={{
															delay: 0.4,
															duration: 0.6,
															ease: [0.19, 1, 0.22, 1],
														}}
														viewport={{ once: true }}
													>
														<Link href={menu.link}>{menu.name}</Link>
													</motion.li>
												</>
											);
										}
									)}
								</ul>
							</div>
						</div>
						<div
							className={`overlay lg:hidden left-0 top-0 fixed w-full  h-[100vh] z-[5] bg-[#000000b5]  transition-opacity delay-300 duration-300 ease-in-out ${
								openMenu ? "visible opacity-[.5] " : " invisible opacity-0"
							}`}
						></div>

						<div className='block lg:hidden overflow-y-scroll'>
							<motion.button
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.5,
									ease: [0.19, 1, 0.22, 1],
								}}
								viewport={{ once: true }}
								className={`transition-opacity  duration-300 ${
									openMenu ? "hidden" : "block"
								}`}
								onClick={openSideBar}
							>
								<Image
									src='/hamburger.svg'
									alt=''
									width={30}
									height={30}
									className='w-auto h-auto object-contain'
								/>
							</motion.button>

							<div
								className={` w-[70%] md:w-[50%] overflow-y-scroll z-10 h-[100vh] bg-[white] transition-all duration-[0.7s] fixed top-0 left-0 ${
									openMenu ? " translate-x-[0]" : "translate-x-[-200%]"
								}`}
							>
								<button
									className='absolute block right-5 top-5'
									onClick={closeSideBar}
								>
									<Image
										src='/close.svg'
										alt=''
										width={20}
										height={20}
										className='w-[35px] h-auto object-contain'
									/>
								</button>
								<ul className='pt-[140px] px-5'>
									{header.menuItems.map((item: any, i: number) => {
										return (
											<>
												<motion.li
													initial={{ opacity: 0, x: -10, y: -10 }}
													animate={{ opacity: 1, x: 0, y: 0 }}
													exit={{ opacity: 0 }}
													transition={{
														delay: i * 0.5,
														duration: 1,
														ease: [0.19, 1, 0.22, 1],
													}}
													viewport={{ once: true }}
													className='text-[20px] leading-[40px] pb-[10px] border-solid border-b-2 border-[#d3cccc6e]'
													key={i}
												>
													<Link href={item.link}>{item.name}</Link>
												</motion.li>
											</>
										);
									})}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</AnimatePresence>
	);
};

export default Header;
