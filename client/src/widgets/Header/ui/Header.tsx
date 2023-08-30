import { FC } from "react";

import { LangSwitcher } from "features/ChangeLang";
import { ThemeSwitcher } from "features/ChangeTheme";
import { Notification } from "features/Notification";
import { SearchField } from "features/Search";

import { classNames } from "shared/lib";

import styles from "./Header.module.scss";

interface IHeader {
  cls?: string;
}

export const Header: FC<IHeader> = ({ cls }) => {
  return (
    <div className={classNames(styles.Header, {}, [cls])}>
      <SearchField />
      <div className={styles.wrapper}>
        <Notification />
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
