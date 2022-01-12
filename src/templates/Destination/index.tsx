// import { useState } from "react";
import Image from "next/image";

import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

import { DestinationsTypes } from "types/destinations";

export const DestinationTemplate = ({ destinations }: DestinationsTypes) => {
	// const [currentDestination, setCurrentDestination] = useState("Moon");

	const { width } = useWindowSize();

	const destination = destinations?.find(item => item.name === "Moon");

	const destinationBackgroundImage =
		width < 768
			? "/assets/destination/background-destination-mobile.jpg"
			: width < 1024
			? "/assets/destination/background-destination-tablet.jpg"
			: "/assets/destination/background-destination-desktop.jpg";

	return (
		<Layout backgroundImage={destinationBackgroundImage}>
			<main className="px-6">
				<section>
					<h1 className="text-white font-barlow-condensed tracking-wider uppercase text-center">
						{" "}
						<span className="text-gray font-bold inline-block mr-2">01</span> Pick your destination
					</h1>

					<div className="flex flex-col items-center">
						<div className="relative w-[170px] h-[170px] mt-8">
							<Image
								src="/assets/destination/image-moon.png"
								alt={destination?.name}
								layout="fill"
							/>
						</div>

						<div className="flex space-x-4 mt-4">
							<button className="text-light font-barlow-condensed tracking-wide uppercase">
								Moon
							</button>
							<button className="text-light font-barlow-condensed tracking-wide uppercase">
								Mars
							</button>
							<button className="text-light font-barlow-condensed tracking-wide uppercase">
								Europa
							</button>
							<button className="text-light font-barlow-condensed tracking-wide uppercase">
								Titan
							</button>
						</div>

						<h2 className="font-bellefair text-white text-xl uppercase mt-4">
							{destination?.name}
						</h2>
						<p className="text-center text-light">{destination?.description}</p>

						<div className="h-[1px] w-full bg-gray my-6" />

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
				</section>
			</main>
		</Layout>
	);
};
