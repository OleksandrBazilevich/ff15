import { RenderWithProviders } from "shared/lib";

import { fireEvent, screen } from "@testing-library/react";

import { IOption, Select } from "./Select";

const mockOnSelect = jest.fn();

const options: IOption[] = [
  { label: "test 1", value: "1" },
  { label: "test 2", value: "2" }
];

const selectedOption: IOption = { label: "test 1", value: "1" };

describe("Select", () => {
  test("render", () => {
    RenderWithProviders(
      <Select
        onSelect={mockOnSelect}
        options={options}
        selectedOption={selectedOption}
      />
    );
    expect(screen.getByTestId("Select")).toBeInTheDocument();
    expect(screen.getByTestId("selectedOptionLabel")).toHaveTextContent(
      selectedOption.label
    );
    fireEvent.click(screen.getByTestId("Select"));
    expect(screen.getByTestId("selectMenu")).toHaveClass("open");
    expect(screen.getAllByTestId("selectMenuItem")).toHaveLength(2);
    fireEvent.click(screen.getAllByTestId("selectMenuItem")[0]);
    expect(mockOnSelect.mock.calls).toHaveLength(1);
    expect(screen.getByTestId("selectMenu")).not.toHaveClass("open");
  });
});
