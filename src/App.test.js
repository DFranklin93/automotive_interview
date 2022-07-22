import { cleanup, render, screen } from "@testing-library/react";

import App from "./App";

afterEach(cleanup);

it("Renders app properly", () => {
  const { container } = render(<App />);
  expect(container.firstChild.classList.contains("App")).toBe(true);
});

it("Has Navbar", () => {
  render(<App />);
  expect(screen.getByLabelText("Navigation - small")).toBeInTheDocument();
});
