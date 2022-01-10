import { render, screen, fireEvent } from "@testing-library/react";

import { Header } from ".";

jest.mock("next/router", () => ({
	useRouter() {
		return {
			route: "/",
			pathname: "/",
			query: "",
			asPath: "",
		};
	},
}));

describe("<Header />", () => {
	it("Should render header element and logo", () => {
		render(<Header />);

		expect(screen.getByRole("banner")).toBeInTheDocument();
		expect(screen.getByLabelText(/Logo/i)).toBeInTheDocument();
	});

	it("Should toggle menu navigation", () => {
		render(<Header />);

		expect(screen.getByLabelText(/Menu hamburger/i)).toBeInTheDocument();
		expect(screen.queryByTestId(/menu mobile/i)).not.toBeInTheDocument();

		fireEvent.click(screen.getByLabelText(/Menu hamburger/i));

		expect(screen.getByTestId(/menu mobile/i)).toBeInTheDocument();
		expect(screen.queryByLabelText(/Menu hamburger/i)).not.toBeInTheDocument();

		fireEvent.click(screen.getByLabelText(/Close icon/i));

		expect(screen.getByLabelText(/Menu hamburger/i)).toBeInTheDocument();
		expect(screen.queryByTestId(/menu mobile/i)).not.toBeInTheDocument();
	});
});
