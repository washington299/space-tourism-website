import { render, screen, fireEvent } from "@testing-library/react";

import { MenuMobile } from ".";

describe("<MenuMobile />", () => {
	it("Should call closeMenuMobile function when close icon is clicked", () => {
		const closeMenuMobileMock = jest.fn();

		render(<MenuMobile closeMenuMobile={closeMenuMobileMock} />);

		fireEvent.click(screen.getByLabelText(/Close icon/i));

		expect(closeMenuMobileMock).toHaveBeenCalledTimes(1);
	});
});
