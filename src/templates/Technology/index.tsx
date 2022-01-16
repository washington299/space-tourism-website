import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

export const TechnologyTemplate = () => {
	const { width } = useWindowSize();

	const technologyBackgroundImage =
		width < 768
			? "/assets/technology/background-technology-mobile.jpg"
			: width < 1024
			? "/assets/technology/background-technology-tablet.jpg"
			: "/assets/technology/background-technology-desktop.jpg";

	return (
		<Layout backgroundImage={technologyBackgroundImage}>
			<>Technology template</>
		</Layout>
	);
};
