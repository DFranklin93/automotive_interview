import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import Home from "../Home";

beforeEach(() => {
  render(<Home />);
});
afterEach(cleanup);

it("Renders without crashing", () => {
  expect(screen.getByTestId("main-component-div")).toBeInTheDocument();
});

it("Has the scheduler container", () => {
  expect(screen.getByTestId("Scheduler")).toBeInTheDocument();
});
