import { HomeIcon, ProfileIcon } from "shared/assets";
import RenderWithProviders from "shared/lib/tests";

import { fireEvent, screen } from "@testing-library/react";

import { DropDown, IDropDownMenuItem } from "./DropDown";

const items: IDropDownMenuItem[] = [
  { label: "Home", link: "/", id: "1", Icon: HomeIcon },
  { label: "Profile", link: "/profile", id: "2", Icon: ProfileIcon }
];
const mockOnClick = jest.fn();

describe("DropDown", () => {
  test("render", () => {
    RenderWithProviders(
      <DropDown onClick={mockOnClick} isOpen items={items} />
    );
    expect(screen.getByTestId("DropDown")).toBeInTheDocument();
    expect(screen.getAllByTestId("DropDownMenuItems")).toHaveLength(2);
  });

  test("render with no items", () => {
    RenderWithProviders(<DropDown onClick={mockOnClick} isOpen items={[]} />);
    expect(screen.getByTestId("DropDown")).toContainElement(
      screen.getByTestId("Empty")
    );
    expect(screen.queryByTestId("DropDownMenuItems")).toBeNull();
  });

  test("closed", () => {
    RenderWithProviders(
      <DropDown onClick={mockOnClick} isOpen={false} items={[]} />
    );
    expect(screen.getByTestId("DropDown")).not.toHaveClass("open");
  });

  test("menuItem onClick", () => {
    RenderWithProviders(
      <DropDown onClick={mockOnClick} isOpen items={items} />
    );
    fireEvent.click(screen.getAllByTestId("DropDownMenuItems")[0]);
    expect(mockOnClick.mock.calls).toHaveLength(1);
    expect(mockOnClick.mock.calls[0][0]).toEqual({
      label: "Home",
      link: "/",
      id: "1",
      Icon: HomeIcon
    });
  });
});
