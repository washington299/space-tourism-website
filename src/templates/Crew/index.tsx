import Image from "next/image";

import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

import { CrewTypes } from "types/crew";

export const CrewTemplate = ({ crew }: CrewTypes) => {
	const { width } = useWindowSize();

	const crewBackgroundImage =
		width < 768
			? "/assets/crew/background-crew-mobile.jpg"
			: width < 1024
			? "/assets/crew/background-crew-tablet.jpg"
			: "/assets/crew/background-crew-desktop.jpg";

	return (
		<Layout backgroundImage={crewBackgroundImage}>
			<main className="px-6 pb-6">
				<h1 className="text-white font-barlow-condensed tracking-wider uppercase text-center md:text-[20px] lg:text-md">
					{" "}
					<span className="text-gray font-bold inline-block mr-2">02</span> Meet your crew
				</h1>

				<div className="flex flex-col items-center">
					<div className="relative w-[150px] h-[220px] mt-8">
						<Image src={crew[0].images.png} alt={crew[0].name} layout="fill" />
					</div>

					<div className="w-full h-[1px] border-b-[1px] border-gray" />

					<div className="flex space-x-4 mt-8">
						<button className="h-[10px] w-[10px] bg-gray rounded-full" />
						<button className="h-[10px] w-[10px] bg-gray rounded-full" />
						<button className="h-[10px] w-[10px] bg-gray rounded-full" />
						<button className="h-[10px] w-[10px] bg-gray rounded-full" />
					</div>

					<section className="flex flex-col items-center mt-8">
						<div className="text-gray uppercase font-bellefair">{crew[0].role}</div>
						<h2 className="text-white text-[24px] uppercase font-bellefair">{crew[0].name}</h2>
						<p className="text-light text-xs text-center font mt-4">{crew[0].bio}</p>
					</section>
				</div>
			</main>
		</Layout>
	);
};
