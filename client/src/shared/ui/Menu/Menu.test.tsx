import { HomeIcon, ProfileIcon } from "shared/assets";
import RenderWithProviders from "shared/lib/tests";

import { screen } from "@testing-library/react";

import { IMenuItem, Menu } from "./Menu";

describe("Menu", () => {
  test("render", () => {
    const items: IMenuItem[] = [
      { label: "Home", link: "/", id: "1", Icon: HomeIcon },
      { label: "Profile", link: "/profile", id: "2", Icon: ProfileIcon }
    ];
    RenderWithProviders(<Menu items={items} />);
    expect(screen.getByTestId("menu")).toBeInTheDocument();
    expect(screen.getAllByTestId("menuItem")).toHaveLength(2);
  });

  test("render with submenus", () => {
    const items: IMenuItem[] = [
      {
        label: "Home",
        link: "/",
        id: "1",
        Icon: HomeIcon,
        children: [{ label: "Login", link: "/Login", id: "3" }]
      },
      { label: "Profile", link: "/profile", id: "2", Icon: ProfileIcon }
    ];
    RenderWithProviders(<Menu items={items} />);
    expect(screen.getAllByTestId("menuItem")).toHaveLength(3);
    expect(screen.getByTestId("submenu")).toBeInTheDocument();
  });

  test("render with no items", () => {
    const items: IMenuItem[] = [];
    RenderWithProviders(<Menu items={items} />);
    expect(screen.queryAllByTestId("menuItem")).toHaveLength(0);
    expect(screen.getByTestId("Empty")).toBeInTheDocument();
  });

  test("Collapsed", () => {
    const items: IMenuItem[] = [
      {
        label: "Home",
        link: "/",
        id: "1",
        Icon: HomeIcon
      },
      { label: "Profile", link: "/profile", id: "2", Icon: ProfileIcon }
    ];
    RenderWithProviders(<Menu items={items} isCollapsed={true} />);
    expect(screen.getByTestId("menu")).toBeInTheDocument();
    expect(screen.queryAllByTestId("menuItemText")).toHaveLength(0);
  });
});
