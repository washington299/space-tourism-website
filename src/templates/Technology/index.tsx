import { useState } from "react";
import Image from "next/image";

import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

import { TechnologyTypes } from "types/technology";

export const TechnologyTemplate = ({ technology }: TechnologyTypes) => {
	const [currentTechnology, setCurrentTechnology] = useState("Launch vehicle");

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
			<main className="mb-6 md:mt-10">
				<section>
					<h1 className="text-white font-barlow-condensed tracking-wider uppercase text-center md:text-[20px] lg:text-md">
						{" "}
						<span className="text-gray font-bold inline-block mr-2">03</span> Space launch 101
					</h1>

					<div className="mt-8 lg:flex lg:flex-row-reverse lg:w-full">
						<div className="relative h-[170px] md:h-[320px] lg:w-[400px] lg:h-[500px] lg:ml-20 xl:w-[500px] xl:h-[500px]">
							<Image
								src={
									width < 768
										? filteredTechnology?.images.landscape || ""
										: filteredTechnology?.images.portrait || ""
								}
								alt={filteredTechnology?.name}
								layout="fill"
								objectFit="cover"
							/>
						</div>

						<div className="px-6 md:max-w-[460px] md:mx-auto lg:max-w-[600px] lg:flex lg:flex-1">
							<div className="flex justify-center space-x-4 mt-8 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-8 lg:mr-8">
								{technology.map((item, index) => (
									<button
										key={item.name}
										className={`w-[40px] h-[40px] border border-gray rounded-full md:w-[60px] md:h-[60px] md:text-[24px] ${
											item.name === currentTechnology ? "bg-white text-dark" : "bg-dark text-white"
										}`}
										onClick={() => setCurrentTechnology(item.name)}
									>
										{index + 1}
									</button>
								))}
							</div>

							<section className="flex flex-col items-center mt-8 lg:justify-center">
								<div className="text-light text-xs font-barlow-condensed tracking-wide uppercase">
									The terminology...
								</div>
								<h2 className="text-white text-[24px] font-bellefair uppercase mt-2 md:text-[40px]">
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
