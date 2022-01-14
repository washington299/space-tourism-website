import { render, screen } from "@testing-library/react";

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
});
