import { useTheme } from "features/ChangeTheme";

import { classNames } from "shared/lib";

import AppRouter from "./providers/router/AppRouter";
import "./styles/index.scss";

const App = () => {
  return (
    <div className={classNames("", {}, [])}>
      <AppRouter />
    </div>
  );
};

export default App;
