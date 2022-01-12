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
			className="fixed inset-0 bg-no-repeat bg-cover overflow-y-auto"
		>
			<Header />
			{children}
		</div>
	);
};
