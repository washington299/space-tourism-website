import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

export const CrewTemplate = () => {
	const { width } = useWindowSize();

	const crewBackgroundImage =
		width < 768
			? "/assets/crew/background-crew-mobile.jpg"
			: width < 1024
			? "/assets/crew/background-crew-tablet.jpg"
			: "/assets/crew/background-crew-desktop.jpg";

	return (
		<Layout backgroundImage={crewBackgroundImage}>
			<main className="px-6">
				<h1 className="text-white font-barlow-condensed tracking-wider uppercase text-center md:text-[20px] lg:text-md">
					{" "}
					<span className="text-gray font-bold inline-block mr-2">02</span> Meet your crew
				</h1>
			</main>
		</Layout>
	);
};
