import { FC, useState } from "react";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { SelectArrowIcon } from "shared/assets";
import { classNames } from "shared/lib";

import { SubMenu } from "../SubMenu/SubMenu";

import styles from "./MenuItems.module.scss";

export interface IMenuItem {
  label: string;
  link?: string;
  id: string;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  children?: IMenuItem[];
}

interface MenuItemProps {
  item: IMenuItem;
  isCollapsed: boolean;
  handleClick: (item: IMenuItem) => void;
}

export const MenuItem: FC<MenuItemProps> = ({
  item,
  handleClick,
  isCollapsed
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const onClick = (item: IMenuItem) => {
    handleClick(item);
    if (item.children?.length) {
      setIsOpen((prev) => !prev);
    }
  };
  return (
    <React.Fragment key={item.id}>
      <li
        data-testid="menuItem"
        className={classNames(
          styles.menuItem,
          { [styles.active]: pathname === item.link },
          []
        )}
        onClick={() => onClick(item)}
      >
        <div className={styles.wrapper}>
          {item.Icon && <item.Icon className={styles.icon} />}
          {!isCollapsed && (
            <span data-testid="menuItemText">{t(item.label)}</span>
          )}
        </div>
        {item.children && !isCollapsed && (
          <SelectArrowIcon
            className={classNames(styles.arrowIcon, {
              [styles.open]: isOpen
            })}
          />
        )}
      </li>
      {item.children && !isCollapsed && (
        <SubMenu isOpen={isOpen} items={item.children} />
      )}
    </React.Fragment>
  );
};
