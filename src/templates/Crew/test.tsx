import { fireEvent, render, screen } from "@testing-library/react";

import { CrewTemplate } from ".";
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

describe("<CrewTemplate />", () => {
	it("Should render Douglas Hurley information by default", () => {
		render(<CrewTemplate crew={mockData.crew} />);

		expect(screen.getByAltText(mockData.crew[0].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[0].role)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[0].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[0].bio)).toBeInTheDocument();
	});

	it("Should change crew information when button is clicked", () => {
		render(<CrewTemplate crew={mockData.crew} />);

		fireEvent.click(screen.getByTitle(mockData.crew[1].name));

		expect(screen.getByAltText(mockData.crew[1].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[1].role)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[1].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[1].bio)).toBeInTheDocument();

		fireEvent.click(screen.getByTitle(mockData.crew[2].name));

		expect(screen.getByAltText(mockData.crew[2].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[2].role)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[2].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[2].bio)).toBeInTheDocument();

		fireEvent.click(screen.getByTitle(mockData.crew[3].name));

		expect(screen.getByAltText(mockData.crew[3].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[3].role)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[3].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[3].bio)).toBeInTheDocument();

		fireEvent.click(screen.getByTitle(mockData.crew[0].name));

		expect(screen.getByAltText(mockData.crew[0].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[0].role)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[0].name)).toBeInTheDocument();
		expect(screen.getByText(mockData.crew[0].bio)).toBeInTheDocument();
	});
});
