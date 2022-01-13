/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

const clickOnButtonAndExpectDestinationInfo = (name: string) => {
	const destination = mockData.destinations?.find(item => item.name === name);

	fireEvent.click(screen.getByRole("button", { name }));

	expect(screen.getByAltText(destination!.name)).toBeInTheDocument();
	expect(screen.getByText(destination!.description)).toBeInTheDocument();
	expect(screen.getByText(destination!.distance)).toBeInTheDocument();
	expect(screen.getByText(destination!.travel)).toBeInTheDocument();
	expect(screen.getByRole("heading", { name: destination!.name })).toBeInTheDocument();
};

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

		clickOnButtonAndExpectDestinationInfo("Mars");
		clickOnButtonAndExpectDestinationInfo("Europa");
		clickOnButtonAndExpectDestinationInfo("Titan");
		clickOnButtonAndExpectDestinationInfo("Moon");
	});
});
