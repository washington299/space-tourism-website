import { useState } from "react";
import Image from "next/image";

import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

import { CrewTypes } from "types/crew";

export const CrewTemplate = ({ crew }: CrewTypes) => {
	const [currentCrew, setCurrentCrew] = useState("Douglas Hurley");

	const filteredCrew = crew.find(item => item.name === currentCrew);

	const { width } = useWindowSize();

	const crewBackgroundImage =
		width < 768
			? "/assets/crew/background-crew-mobile.jpg"
			: width < 1024
			? "/assets/crew/background-crew-tablet.jpg"
			: "/assets/crew/background-crew-desktop.jpg";

	return (
		<Layout backgroundImage={crewBackgroundImage}>
			<main className="px-6 pb-6 md:mt-10">
				<h1 className="text-white font-barlow-condensed tracking-wider uppercase text-center md:text-[20px] lg:text-md">
					{" "}
					<span className="text-gray font-bold inline-block mr-2">02</span> Meet your crew
				</h1>

				<div className="flex flex-col items-center md:flex-col-reverse lg:flex-row-reverse lg:justify-around">
					<div className="relative w-[150px] h-[220px] mt-8 md:mt-10 md:w-[450px] md:h-[572px]">
						<Image src={filteredCrew?.images.png || ""} alt={filteredCrew?.name} layout="fill" />
					</div>

					<div className="w-full h-[1px] border-b-[1px] border-gray md:hidden" />

					<div className="flex flex-col md:flex-col-reverse items-center lg:items-start lg:flex-col-reverse">
						<div className="flex space-x-4 mt-8 lg:mt-28">
							{crew.map(crew => (
								<button
									key={crew.name}
									className={`h-[10px] w-[10px] bg-gray rounded-full ${
										currentCrew === crew.name && "bg-white"
									}`}
									title={crew.name}
									onClick={() => setCurrentCrew(crew.name)}
								/>
							))}
						</div>

						<section className="flex flex-col items-center mt-8 md:max-w-[460px] lg:items-start xl:max-w-[630px]">
							<div className="text-gray uppercase font-bellefair md:text-[24px] xl:text-lg">
								{filteredCrew?.role}
							</div>
							<h2 className="text-white text-[24px] uppercase font-bellefair md:text-[40px] xl:text-xl">
								{filteredCrew?.name}
							</h2>
							<p className="text-light text-xs text-center font mt-4 lg:text-left xl:text-[18px]">
								{filteredCrew?.bio}
							</p>
						</section>
					</div>
				</div>
			</main>
		</Layout>
	);
};
