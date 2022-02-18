import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matchers snapshot", () => {
    const utils = render(<Profile username="emsthf" name="든솔" />);
    expect(utils.container).toMatchSnapshot();
  });

  it("show the props correctly", () => {
    const utils = render(<Profile username="emsthf" name="든솔" />);
    utils.getByText("emsthf");
    // utils.getByText("든솔");
    utils.getByText(/든/);
  });
});
