import { BrowserRouter } from "react-router-dom";

const RouterProvider = (component: () => React.ReactNode) => () => {
  return <BrowserRouter>{component()}</BrowserRouter>;
};

export default RouterProvider;
