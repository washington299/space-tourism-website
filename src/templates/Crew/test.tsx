/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

const clickOnButtonAndExpectCrewInformation = (name: string) => {
	const crew = mockData.crew.find(item => item.name === name);

	fireEvent.click(screen.getByTitle(name));

	expect(screen.getByAltText(crew!.name)).toBeInTheDocument();
	expect(screen.getByText(crew!.role)).toBeInTheDocument();
	expect(screen.getByText(crew!.name)).toBeInTheDocument();
	expect(screen.getByText(crew!.bio)).toBeInTheDocument();
};

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

		clickOnButtonAndExpectCrewInformation("Mark Shuttleworth");
		clickOnButtonAndExpectCrewInformation("Victor Glover");
		clickOnButtonAndExpectCrewInformation("Anousheh Ansari");
		clickOnButtonAndExpectCrewInformation("Douglas Hurley");
	});
});
