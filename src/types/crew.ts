type Images = {
	png: string;
	webp: string;
};

type CrewEntity = {
	name: string;
	images: Images;
	role: string;
	bio: string;
};

export type CrewTypes = {
	crew: CrewEntity[];
};
