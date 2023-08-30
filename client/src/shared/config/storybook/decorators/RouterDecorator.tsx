import { MemoryRouter } from "react-router-dom";

import { Story } from "@storybook/react";

const RouterDecorator = (Story: Story) => {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Story />
    </MemoryRouter>
  );
};

export default RouterDecorator;
