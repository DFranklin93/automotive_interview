import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import TimeSlot from "../TimeSlot";

let timevar = "9:00 am";

beforeEach(() => {
  render(<TimeSlot time={timevar} />);
});

afterEach(cleanup);

it("Renders without crashing", () => {
  expect(screen.getByTestId("Timeslot")).toBeInTheDocument();
});

it("Takes time prop and displays value", () => {
  expect(screen.getByText(timevar));
});
