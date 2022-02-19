import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import DelaydToggle from "./DelaydToggle";

describe("<DelayedToggle/>", () => {
  it("reveals text when toggle is ON", async () => {
    const { getByText } = render(<DelaydToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await waitFor(() => getByText("haha"), { timeout: 2000 });
  });
  it("toggle text ON/OFF", async () => {
    const { getByText } = render(<DelaydToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const text = await waitFor(() => getByText("ON"));
    expect(text).toHaveTextContent("ON");
  });
});
