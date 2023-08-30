import { render } from "@testing-library/react";

import RenderWithRouter from "./renderWithRouter";
import RenderWithTranslation from "./renderWithTranslation";

const RenderWithProviders = (component: React.ReactNode) => {
  return render(
    <RenderWithTranslation>
      <RenderWithRouter>{component}</RenderWithRouter>
    </RenderWithTranslation>
  );
};

export default RenderWithProviders;
