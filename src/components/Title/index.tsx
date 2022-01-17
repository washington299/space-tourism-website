type TitleProps = {
	number: string;
	text: string;
};

export const Title = ({ number, text }: TitleProps) => {
	return (
		<h1 className="text-white font-barlow-condensed tracking-wider uppercase text-center md:text-[20px] lg:text-md">
			{" "}
			<span className="text-gray font-bold inline-block mr-4">{number}</span>
			{text}
		</h1>
	);
};
