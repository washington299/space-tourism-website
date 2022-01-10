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
			<h1>Content</h1>
		</Layout>
	);
};
