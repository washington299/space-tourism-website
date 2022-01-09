import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useWindowSize } from "hooks/useWindowSize";

export const Header = () => {
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

	const { width } = useWindowSize();

	return (
		<header className="flex justify-between items-center p-6 md:py-16 md:px-14">
			<Image
				src="/assets/shared/logo.svg"
				alt="logo"
				width={width > 768 ? 48 : 40}
				height={width > 768 ? 48 : 40}
				aria-label="Logo"
				className="cursor-pointer"
			/>

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

			{isMenuMobileOpen && (
				<div
					data-testid="menu mobile"
					className="absolute top-0 right-0 bottom-0 flex flex-col items-end px-6 py-8 w-[254px] bg-white/10 backdrop-blur-[81px] md:hidden"
				>
					<Image
						src="/assets/shared/icon-close.svg"
						alt="close icon"
						width={20}
						height={20}
						aria-label="close icon"
						className="cursor-pointer"
						onClick={() => setIsMenuMobileOpen(false)}
					/>

					<ul className="w-full flex flex-col space-y-4 mt-16 font-barlow-condensed text-white uppercase">
						<li>
							<Link href="/">
								<a className="flex space-x-3">
									<span className="font-bold">00</span>
									<span className="tracking-wider">Home</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="flex space-x-3">
									<span className="font-bold">01</span>
									<span className="tracking-wider">Destination</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="flex space-x-3">
									<span className="font-bold">02</span>
									<span className="tracking-wider">Crew</span>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a className="flex space-x-3">
									<span className="font-bold">03</span>
									<span className="tracking-wider">Technology</span>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
};
