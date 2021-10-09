import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../../components/ForecastSummaries";

describe("ForecastSummaries", () => {
  const validProps = [
    {
      date: 3333444,
      description: "stub description 1",
      icon: "800",
      temperature: {
        max: 22,
        min: 14,
      },
    },
    {
      date: 3344245,
      description: "stub description 2",
      icon: "602",
      temperature: {
        max: 35,
        min: 10,
      },
    },
  ];
  it("renders correctly", () => {
    const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders the correct number of ForecastSummary instances", () => {
    const { getAllByTestId } = render(
      <ForecastSummaries forecasts={validProps} />
    );
    expect(getAllByTestId("forecast-summary")).toHaveLength(2);
  });
});
