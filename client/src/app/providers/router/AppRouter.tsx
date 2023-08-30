import { Route, Routes } from "react-router-dom";

import { routerConfig } from "./routerConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({ element, path }) => (
        <Route element={element} path={path} key={path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
