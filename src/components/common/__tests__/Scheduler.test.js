import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import Scheduler from "../Scheduler";

beforeEach(() => {
  render(<Scheduler />);
});

afterEach(cleanup);

it("Renders without crashing", () => {
  expect(screen.getByTestId("Scheduler")).toBeInTheDocument();
});

it("Contains timeslot", () => {
  expect(screen.getAllByTestId("Timeslot")).toHaveLength(9);
});
