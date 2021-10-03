import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 3333444,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 20,
      max: 30,
    },
}
  it("renders details of the forecast including: date, description, icon and temperature", () => {
    const { asFragment } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
