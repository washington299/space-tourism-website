import { useState } from "react";
import Image from "next/image";

export const Header = () => {
	const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

	return (
		<header className="flex justify-between items-center p-6">
			<Image
				src="/assets/shared/logo.svg"
				alt="logo"
				width={40}
				height={40}
				aria-label="Logo"
				className="cursor-pointer"
			/>

			{!isMenuMobileOpen && (
				<Image
					src="/assets/shared/icon-hamburger.svg"
					alt="menu hamburger"
					width={24}
					height={20}
					aria-label="menu hamburger"
					className="cursor-pointer"
					onClick={() => setIsMenuMobileOpen(true)}
				/>
			)}

			{isMenuMobileOpen && (
				<div data-testid="menu mobile">
					<Image
						src="/assets/shared/icon-close.svg"
						alt="close icon"
						width={20}
						height={20}
						aria-label="close icon"
						className="cursor-pointer"
						onClick={() => setIsMenuMobileOpen(false)}
					/>
				</div>
			)}
		</header>
	);
};
