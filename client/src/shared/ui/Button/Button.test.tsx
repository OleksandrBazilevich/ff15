import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("button", () => {
  test("render", () => {
    render(<Button>test</Button>);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("primary theme", () => {
    render(<Button theme="primary">test</Button>);
    expect(screen.getByText("test")).toHaveClass("primary");
  });
  test("clean theme", () => {
    render(<Button theme="clean">test</Button>);
    expect(screen.getByText("test")).toHaveClass("clean");
  });
});
