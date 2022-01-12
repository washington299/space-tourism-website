import { GetStaticProps } from "next";

import { QUERY } from "services/queries";

import { DestinationTemplate } from "templates/Destination";

import { DestinationsTypes } from "types/destinations";

const Destination = ({ destinations }: DestinationsTypes) => {
	return <DestinationTemplate destinations={destinations} />;
};

export default Destination;

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await QUERY.getDestinations();

	return {
		props: {
			destinations: data,
		},
	};
};
