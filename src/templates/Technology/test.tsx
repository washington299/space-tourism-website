import { fireEvent, render, screen } from "@testing-library/react";

import { TechnologyTemplate } from ".";
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

describe("<TechnologyTemplate />", () => {
	it("Should render first option by default", () => {
		render(<TechnologyTemplate technology={mockData.technology} />);

		expect(screen.getByAltText(mockData.technology[0].name)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: mockData.technology[0].name })).toBeInTheDocument();
		expect(screen.getByText(mockData.technology[0].description)).toBeInTheDocument();
	});

	it("Should change data when clicked on buttons", () => {
		render(<TechnologyTemplate technology={mockData.technology} />);

		fireEvent.click(screen.getByRole("button", { name: "2" }));

		expect(screen.getByAltText(mockData.technology[1].name)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: mockData.technology[1].name })).toBeInTheDocument();
		expect(screen.getByText(mockData.technology[1].description)).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "3" }));

		expect(screen.getByAltText(mockData.technology[2].name)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: mockData.technology[2].name })).toBeInTheDocument();
		expect(screen.getByText(mockData.technology[2].description)).toBeInTheDocument();

		fireEvent.click(screen.getByRole("button", { name: "1" }));

		expect(screen.getByAltText(mockData.technology[0].name)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: mockData.technology[0].name })).toBeInTheDocument();
		expect(screen.getByText(mockData.technology[0].description)).toBeInTheDocument();
	});
});
