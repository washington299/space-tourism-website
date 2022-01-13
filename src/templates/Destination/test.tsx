import { render, screen, fireEvent } from "@testing-library/react";

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

	it("Should change planet when another one is selected", () => {
		render(<DestinationTemplate destinations={mockData.destinations} />);

		fireEvent.click(screen.getByRole("button", { name: /Mars/i }));

		expect(screen.getByAltText(mockData.destinations[1].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[1].description)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[1].distance)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[1].travel)).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: mockData.destinations[1].name }),
		).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /Europa/i }));

		expect(screen.getByAltText(mockData.destinations[2].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[2].description)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[2].distance)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[2].travel)).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: mockData.destinations[2].name }),
		).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /Titan/i }));

		expect(screen.getByAltText(mockData.destinations[3].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[3].description)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[3].distance)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[3].travel)).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: mockData.destinations[3].name }),
		).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: /Moon/i }));

		expect(screen.getByAltText(mockData.destinations[0].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[0].description)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[0].distance)).toBeInTheDocument();
		expect(screen.getByText(mockData.destinations[0].travel)).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: mockData.destinations[0].name }),
		).toBeInTheDocument();
	});
});
