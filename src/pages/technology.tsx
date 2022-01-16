import { GetStaticProps } from "next";

import { QUERY } from "services/queries";

import { TechnologyTemplate } from "templates/Technology";

import { TechnologyTypes } from "types/technology";

const Technology = ({ technology }: TechnologyTypes) => {
	return <TechnologyTemplate technology={technology} />;
};

export default Technology;

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await QUERY.getTechnology();

	return {
		props: {
			technology: data,
		},
	};
};
