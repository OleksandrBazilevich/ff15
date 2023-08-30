import { FC, PropsWithChildren } from "react";
import { MemoryRouter } from "react-router-dom";

const RenderWithRouter: FC<PropsWithChildren> = ({ children }) => {
  return <MemoryRouter initialEntries={["/"]}>{children}</MemoryRouter>;
};

export default RenderWithRouter;
