import { render, screen } from "@testing-library/react";

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
});
