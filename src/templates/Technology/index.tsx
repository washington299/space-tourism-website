import { useState } from "react";
import Image from "next/image";

import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

import { TechnologyTypes } from "types/technology";

export const TechnologyTemplate = ({ technology }: TechnologyTypes) => {
	const [currentTechnology] = useState("Launch vehicle");

	const { width } = useWindowSize();

	const filteredTechnology = technology.find(item => item.name === currentTechnology);

	const technologyBackgroundImage =
		width < 768
			? "/assets/technology/background-technology-mobile.jpg"
			: width < 1024
			? "/assets/technology/background-technology-tablet.jpg"
			: "/assets/technology/background-technology-desktop.jpg";

	return (
		<Layout backgroundImage={technologyBackgroundImage}>
			<main className="mb-6">
				<section>
					<h1 className="text-white font-barlow-condensed tracking-wider uppercase text-center md:text-[20px] lg:text-md">
						{" "}
						<span className="text-gray font-bold inline-block mr-2">03</span> Space launch 101
					</h1>

					<div className="mt-8">
						<div className="relative h-[170px]">
							<Image
								src={
									width < 768
										? filteredTechnology?.images.landscape || ""
										: filteredTechnology?.images.portrait || ""
								}
								alt={filteredTechnology?.name}
								layout="fill"
							/>
						</div>

						<div className="px-6">
							<div className="flex justify-center space-x-4 mt-8">
								<button className="w-[40px] h-[40px] text-white border border-gray rounded-full">
									1
								</button>
								<button className="w-[40px] h-[40px] text-white border border-gray rounded-full">
									2
								</button>
								<button className="w-[40px] h-[40px] text-white border border-gray rounded-full">
									3
								</button>
							</div>

							<section className="flex flex-col items-center mt-8">
								<div className="text-light text-xs font-barlow-condensed tracking-wide uppercase">
									The terminology...
								</div>
								<h2 className="text-white text-[24px] font-bellefair uppercase mt-2">
									{filteredTechnology?.name}
								</h2>
								<p className="text-center text-light mt-4">{filteredTechnology?.description}</p>
							</section>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};
