import { RenderWithProviders } from "shared/lib";

import { screen } from "@testing-library/react";

import { Button } from "./Button";

describe("button", () => {
  test("render", () => {
    RenderWithProviders(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("primary theme", () => {
    RenderWithProviders(<Button theme="primary">test</Button>);
    expect(screen.getByText("test")).toHaveClass("primary");
  });
  test("clean theme", () => {
    RenderWithProviders(<Button theme="clean">test</Button>);
    expect(screen.getByText("test")).toHaveClass("clean");
  });
});
