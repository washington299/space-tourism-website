import { Header } from "components/Header";

type LayoutTypes = {
	backgroundImage: string;
	children: JSX.Element;
};

export const Layout = ({ backgroundImage, children }: LayoutTypes) => {
	return (
		<div
			data-testid="background image"
			style={{ backgroundImage: `url(${backgroundImage})` }}
			className="w-full h-screen bg-no-repeat bg-cover"
		>
			<Header />
			{children}
		</div>
	);
};
