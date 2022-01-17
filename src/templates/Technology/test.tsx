/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

const clickOnButtonAndExpectTechnologyData = (buttonLabel: string) => {
	const technology = mockData.technology.find(
		(_item, index) => index + 1 === parseInt(buttonLabel),
	);

	fireEvent.click(screen.getByRole("button", { name: buttonLabel }));

	expect(screen.getByAltText(technology!.name)).toBeInTheDocument();
	expect(screen.getByRole("heading", { name: technology!.name })).toBeInTheDocument();
	expect(screen.getByText(technology!.description)).toBeInTheDocument();
};

describe("<TechnologyTemplate />", () => {
	it("Should render first option by default", () => {
		render(<TechnologyTemplate technology={mockData.technology} />);

		expect(screen.getByAltText(mockData.technology[0].name)).toBeInTheDocument();
		expect(screen.getByRole("heading", { name: mockData.technology[0].name })).toBeInTheDocument();
		expect(screen.getByText(mockData.technology[0].description)).toBeInTheDocument();
	});

	it("Should change data when clicked on buttons", () => {
		render(<TechnologyTemplate technology={mockData.technology} />);

		clickOnButtonAndExpectTechnologyData("2");
		clickOnButtonAndExpectTechnologyData("3");
		clickOnButtonAndExpectTechnologyData("1");
	});
});
