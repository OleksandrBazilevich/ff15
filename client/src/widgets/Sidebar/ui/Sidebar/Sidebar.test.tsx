import RenderWithProviders from "shared/lib/tests";

import { fireEvent, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";

describe("sidebar", () => {
  test("render", () => {
    RenderWithProviders(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("collapse", () => {
    RenderWithProviders(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toHaveStyle({ width: 65 });
    const toggleBtn = screen.getByTestId("toggleBtn");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    expect(screen.getByTestId("sidebarLogo")).toBeInTheDocument();
    expect(screen.getAllByTestId("menuItemText")).not.toHaveLength(0);
    expect(screen.getByTestId("sidebar")).toHaveStyle({ width: 300 });
  });
});
