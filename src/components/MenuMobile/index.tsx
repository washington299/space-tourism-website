import Image from "next/image";
import Link from "next/link";

type MenuMobileTypes = {
	closeMenuMobile: () => void;
};

export const MenuMobile = ({ closeMenuMobile }: MenuMobileTypes) => {
	return (
		<div
			data-testid="menu mobile"
			className="absolute z-10 top-0 right-0 bottom-0 flex flex-col items-end px-6 py-8 w-[254px] bg-white/10 backdrop-blur-[81px] md:hidden"
		>
			<Image
				src="/assets/shared/icon-close.svg"
				alt="close icon"
				width={20}
				height={20}
				aria-label="close icon"
				className="cursor-pointer"
				onClick={closeMenuMobile}
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
					<Link href="/destination">
						<a className="flex space-x-3">
							<span className="font-bold">01</span>
							<span className="tracking-wider">Destination</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/crew">
						<a className="flex space-x-3">
							<span className="font-bold">02</span>
							<span className="tracking-wider">Crew</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="/technology">
						<a className="flex space-x-3">
							<span className="font-bold">03</span>
							<span className="tracking-wider">Technology</span>
						</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
