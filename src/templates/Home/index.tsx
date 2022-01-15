import Link from "next/link";

import { useWindowSize } from "hooks/useWindowSize";

import { Layout } from "components/Layout";

export const HomeTemplate = () => {
	const { width } = useWindowSize();

	const homeBackgroundImage =
		width < 768
			? "/assets/home/background-home-mobile.jpg"
			: width < 1024
			? "/assets/home/background-home-tablet.jpg"
			: "/assets/home/background-home-desktop.jpg";

	return (
		<Layout backgroundImage={homeBackgroundImage}>
			<div className="h-4/5 flex flex-col items-center justify-between lg:flex-row lg:justify-around lg:items-end lg:pb-[20px] lg:h-4/6 xl:pb-0">
				<section className="flex flex-col items-center mt-6 px-6 md:max-w-md md:m-auto md:mt-16 lg:m-0 lg:items-start lg:px-0">
					<p className="text-light font-barlow-condensed tracking-wider text-center uppercase md:text-md lg:text-[18px] xl:text-md">
						So, you want to travel to
					</p>
					<h1 className="text-white font-bellefair text-[80px] uppercase md:text-[150px] lg:text-[100px] xl:text-[150px]">
						Space
					</h1>
					<p className="text-light font-barlow-condensed text-center md:text-[18px] lg:text-left lg:tracking-wide">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space
						and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
						a truly out of this world experience!
					</p>
				</section>

				<Link href="/destination">
					<button className="w-[150px] h-[150px] bg-white rounded-full text-[20px] cursor-pointer uppercase tracking-wide font-bellefair md:h-[242px] md:w-[242px] md:text-lg lg:h-[200px] lg:w-[200px] xl:h-[274px] xl:w-[274px]">
						Explore
					</button>
				</Link>
			</div>
		</Layout>
	);
};
