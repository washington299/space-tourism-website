import { render, screen } from "@testing-library/react";

import { Title } from ".";

describe("<Title />", () => {
	it("should render components with correct params", () => {
		render(<Title number={"01"} text="any text" />);

		expect(screen.getByRole("heading", { name: "01 any text" })).toBeInTheDocument();
	});
});
