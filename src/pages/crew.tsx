import { GetStaticProps } from "next";

import { QUERY } from "services/queries";

import { CrewTemplate } from "templates/Crew";

import { CrewTypes } from "types/crew";

const Crew = ({ crew }: CrewTypes) => {
	return <CrewTemplate crew={crew} />;
};

export default Crew;

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await QUERY.getCrews();

	return {
		props: {
			crew: data,
		},
	};
};
