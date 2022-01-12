import { render, screen } from "@testing-library/react";

import { DestinationTemplate } from ".";
import { mockData } from "test/mockData";

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

describe("<DestinationTemplate />", () => {
	it("Should render moon data by default", () => {
		render(<DestinationTemplate destinations={mockData.destinations} />);

		expect(screen.getByAltText(mockData.destinations[0].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[0].description)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[0].distance)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[0].travel)).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: mockData.destinations[0].name }),
		).toBeInTheDocument();
	});
});
