import { Layout } from "components/Layout";

import { useWindowSize } from "hooks/useWindowSize";

export const DestinationTemplate = () => {
	const { width } = useWindowSize();

	const destinationBackgroundImage =
		width < 768
			? "/assets/destination/background-destination-mobile.jpg"
			: width < 1024
			? "/assets/destination/background-destination-tablet.jpg"
			: "/assets/destination/background-destination-desktop.jpg";

	return (
		<Layout backgroundImage={destinationBackgroundImage}>
			<div>Destination</div>
		</Layout>
	);
};
