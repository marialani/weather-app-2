import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import { location, forecasts } from "../data/forecast.json";

test("renders correctly", () => {
  const { asFragment } = render(
    <App forecasts={forecasts} location={location} />
  );

  expect(asFragment()).toMatchSnapshot();
});
