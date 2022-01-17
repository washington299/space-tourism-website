import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { useWindowSize } from "hooks/useWindowSize";

import { MenuMobile } from "components/MenuMobile";

export const Header = () => {
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

	const { width } = useWindowSize();

	const router = useRouter();

	const paths = {
		home: "/",
		destination: "/destination",
		crew: "/crew",
		technology: "/technology",
	};

	const closeMenuMobile = () => {
		setIsMenuMobileOpen(false);
	};

	return (
		<header className="flex justify-between items-center p-6 md:pl-6 md:pr-0 md:py-0 lg:pl-10 lg:py-10">
			<Link href="/">
				<a>
					<Image
						src="/assets/shared/logo.svg"
						alt="logo"
						width={width > 768 ? 48 : 40}
						height={width > 768 ? 48 : 40}
						aria-label="Logo"
						className="cursor-pointer"
					/>
				</a>
			</Link>

			<nav className="hidden px-12 bg-gray/10 backdrop-blur-[81px] md:flex md:justify-center lg:w-3/5">
				<ul className="flex space-x-10 font-barlow-condensed text-white uppercase xl:space-x-16">
					<li
						className={`tracking-wider py-10 ${
							router.pathname === paths.home && "border-b-2 border-white"
						}`}
					>
						<Link href={paths.home}>
							<a className="flex space-x-3">
								<span className="font-bold">00</span>
								<span className="tracking-wider">Home</span>
							</a>
						</Link>
					</li>
					<li
						className={`tracking-wider py-10 ${
							router.pathname === paths.destination && "border-b-2 border-white"
						}`}
					>
						<Link href={paths.destination}>
							<a className="flex space-x-3">
								<span className="font-bold">01</span>
								<span className="tracking-wider">Destination</span>
							</a>
						</Link>
					</li>
					<li
						className={`tracking-wider py-10 ${
							router.pathname === paths.crew && "border-b-2 border-white"
						}`}
					>
						<Link href={paths.crew}>
							<a className="flex space-x-3">
								<span className="font-bold">02</span>
								<span className="tracking-wider">Crew</span>
							</a>
						</Link>
					</li>
					<li
						className={`tracking-wider py-10 ${
							router.pathname === paths.technology && "border-b-2 border-white"
						}`}
					>
						<Link href={paths.technology}>
							<a className="flex space-x-3">
								<span className="font-bold">03</span>
								<span className="tracking-wider">Technology</span>
							</a>
						</Link>
					</li>
				</ul>
			</nav>

			{!isMenuMobileOpen && (
				<div className="md:hidden">
					<Image
						src="/assets/shared/icon-hamburger.svg"
						alt="menu hamburger"
						width={24}
						height={20}
						aria-label="menu hamburger"
						className="cursor-pointer"
						onClick={() => setIsMenuMobileOpen(true)}
					/>
				</div>
			)}

			{isMenuMobileOpen && <MenuMobile closeMenuMobile={closeMenuMobile} />}
		</header>
	);
};
