import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("has a number and two buttons", () => {
    const utils = render(<Counter />);
    utils.getByText("0");
    utils.getByText("-1");
    utils.getByText("+1");
  });

  it("increase", () => {
    const utils = render(<Counter />);
    const number = utils.getByText(0);
    const plusButton = utils.getByText("+1");

    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    expect(number).toHaveTextContent("2");
    // 이렇게 엘리먼트에서 텍스트를 직접 꺼내서 비교도 가능
    expect(number.textContent).toBe("2");
  });

  it("onDecrease", () => {
    const utils = render(<Counter />);
    const number = utils.getByText(0);
    const minusButton = utils.getByText("-1");

    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    fireEvent.click(minusButton);

    expect(number).toHaveTextContent("-3");
    // 이렇게 엘리먼트에서 텍스트를 직접 꺼내서 비교도 가능
    expect(number.textContent).toBe("-3");
  });
});
