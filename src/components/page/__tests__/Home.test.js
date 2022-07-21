import React from "react";
import { cleanup, render, screen } from "@testing-library/react";

import Home from "../Home";

afterEach(cleanup);

it("Renders without crashing", () => {
    render(<Home />);
    expect(screen.getByTestId("main-component-div")).toBeInTheDocument();
})