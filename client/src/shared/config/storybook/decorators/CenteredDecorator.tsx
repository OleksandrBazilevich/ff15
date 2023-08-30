import { Story } from "@storybook/react";

const CenteredDecorator = (Story: Story) => {
  return (
    <div className={"StoryCentered"}>
      <Story />
    </div>
  );
};

export default CenteredDecorator;
