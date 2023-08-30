import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";

import { Empty } from "../Empty/Empty";
import { MenuItem } from "./MenuItem/MenuItem";

import styles from "./Menu.module.scss";

interface IMenu {
  cls?: string;
  items: IMenuItem[];
  dept?: number;
  isCollapsed?: boolean;
  onClick?: (item: IMenuItem) => void;
}

export interface IMenuItem {
  label: string;
  link?: string;
  id: string;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  children?: IMenuItem[];
}

export const Menu: FC<IMenu> = ({
  cls,
  items,
  onClick,
  dept,
  isCollapsed = false
}) => {
  const { t } = useTranslation();

  const handleClick = (item: IMenuItem) => {
    onClick?.(item);
  };

  return (
    <ul
      data-testid="menu"
      className={classNames(styles.Menu, {}, [cls])}
      style={{ paddingLeft: `${dept * 16}px` }}
    >
      {items.length ? (
        items.map((item) => {
          return (
            <MenuItem
              isCollapsed={isCollapsed}
              item={item}
              key={item.id}
              handleClick={handleClick}
            />
          );
        })
      ) : (
        <Empty description={<div>{t("empty description")}</div>} />
      )}
    </ul>
  );
};
