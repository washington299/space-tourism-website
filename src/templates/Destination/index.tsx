import { useState } from "react";
import Image from "next/image";

import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

import { DestinationsTypes } from "types/destinations";

export const DestinationTemplate = ({ destinations }: DestinationsTypes) => {
	const [currentDestination, setCurrentDestination] = useState("Moon");

	const { width } = useWindowSize();

	const destination = destinations?.find(item => item.name === currentDestination);

	const destinationBackgroundImage =
		width < 768
			? "/assets/destination/background-destination-mobile.jpg"
			: width < 1024
			? "/assets/destination/background-destination-tablet.jpg"
			: "/assets/destination/background-destination-desktop.jpg";

	const activeButtonStyle = "text-white border-b-[1px]";
	const disableButtonStyle = "text-light border-0";

	return (
		<Layout backgroundImage={destinationBackgroundImage}>
			<main className="px-6 md:my-10 md:mx-auto md:max-w-[600px] lg:max-w-[80%]">
				<section>
					<h1 className="text-white font-barlow-condensed tracking-wider uppercase text-center md:text-[20px] lg:text-md">
						{" "}
						<span className="text-gray font-bold inline-block mr-2">01</span> Pick your destination
					</h1>

					<div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-24 lg:mt-10 xl:justify-evenly">
						<div className="relative w-[170px] h-[170px] mt-8 md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px]">
							<Image src={destination?.images.png || ""} alt={destination?.name} layout="fill" />
						</div>

						<div className="flex flex-col items-center lg:flex-1 lg:items-start xl:max-w-[600px]">
							<div className="flex space-x-4 mt-4">
								{destinations?.map(({ name }) => (
									<button
										key={name}
										className={`font-barlow-condensed tracking-wide uppercase p-1 ${
											currentDestination === name ? activeButtonStyle : disableButtonStyle
										}`}
										onClick={() => setCurrentDestination(name)}
									>
										{name}
									</button>
								))}
							</div>

							<h2 className="font-bellefair text-white text-xl uppercase mt-4 md:text-xl xl:text-2xl">
								{destination?.name}
							</h2>
							<p className="text-center text-light lg:text-left xl:text-[20px]">
								{destination?.description}
							</p>

							<div className="h-[1px] w-full bg-gray my-6" />

							<div className="w-full md:flex md:items-center md:justify-evenly">
								<div className="flex flex-col uppercase">
									<span className="text-light text-center font-barlow-condensed tracking-wide">
										Avg. distance
									</span>
									<span className="text-md text-white text-center font-bellefair">
										{destination?.distance}
									</span>
								</div>

								<div className="flex flex-col my-6 uppercase">
									<span className="text-light text-center font-barlow-condensed tracking-wide">
										Est. travel time
									</span>
									<span className="text-md text-white text-center font-bellefair">
										{destination?.travel}
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</Layout>
	);
};
