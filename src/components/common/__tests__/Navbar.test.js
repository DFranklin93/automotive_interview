import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import Navbar from "../Navbar";

beforeEach(() => {
  render(<Navbar />);
});

afterEach(cleanup);

describe("SmallNav tests", () => {
  it("Renders without crashing", () => {
    expect(screen.getByLabelText("Navigation - small")).toBeInTheDocument();
  });
  it("Has header text", () => {
    expect(screen.getByTestId("nav-brand")).toBeInTheDocument();
  });
});
