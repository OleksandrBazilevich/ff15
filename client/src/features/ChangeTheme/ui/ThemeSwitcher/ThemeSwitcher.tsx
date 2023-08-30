import { FC } from "react";

import { ThemeSwitcherIcon } from "shared/assets";
import { Button } from "shared/ui";

import { useTheme } from "../../lib/useTheme";

import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher: FC = () => {
  const { toggleTheme } = useTheme();
  return (
    <Button theme="clean" onClick={toggleTheme}>
      <ThemeSwitcherIcon className={styles.icon} />
    </Button>
  );
};
