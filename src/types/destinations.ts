type Images = {
	png: string;
	webp: string;
};

type DestinationsEntity = {
	name: string;
	images: Images;
	description: string;
	distance: string;
	travel: string;
};

export type DestinationsTypes = {
	destinations: DestinationsEntity[] | null;
};
