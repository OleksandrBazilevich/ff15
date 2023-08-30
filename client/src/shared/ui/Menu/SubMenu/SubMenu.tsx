import { FC } from "react";

import { classNames } from "shared/lib";

import { Menu } from "../Menu";
import { IMenuItem } from "../MenuItem/MenuItem";

import styles from "./SubMenu.module.scss";

interface ISubMenu {
  isOpen: boolean;
  items: IMenuItem[];
}

export const SubMenu: FC<ISubMenu> = ({ isOpen, items }) => {
  const dept = 1;

  return (
    <div
      data-testid="submenu"
      className={classNames(styles.submenu, {
        [styles.open]: isOpen
      })}
    >
      <Menu dept={dept + 1} items={items} />
    </div>
  );
};
