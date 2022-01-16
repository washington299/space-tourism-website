type Images = {
	portrait: string;
	landscape: string;
};

type Technology = {
	name: string;
	images: Images;
	description: string;
};

export type TechnologyTypes = {
	technology: Technology[];
};
