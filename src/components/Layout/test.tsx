import React from "react";
import { render, screen } from "@testing-library/react";

import { Layout } from ".";

describe("<Layout />", () => {
	it("Should render correct backgoundImage and children element", () => {
		render(
			<Layout backgroundImage="fakeimage.jpg">
				<h1>Element</h1>
			</Layout>,
		);

		expect(screen.getByTestId(/Background image/i)).toHaveStyle({
			backgroundImage: "fakeimage.jpg",
		});
		expect(screen.getByRole("heading", { name: /element/i })).toBeInTheDocument();
	});
});
