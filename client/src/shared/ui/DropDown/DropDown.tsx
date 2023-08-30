import { FC, PropsWithChildren } from "react";

import { classNames } from "shared/lib";

import { Empty } from "../Empty/Empty";

import styles from "./DropDown.module.scss";

export interface IDropDownMenuItem {
  id: string;
  link?: string;
  label: React.ReactNode;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

interface IDropDown {
  cls?: string;
  isOpen: boolean;
  onClick: (item: IDropDownMenuItem) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  items: IDropDownMenuItem[];
}

export const DropDown: FC<PropsWithChildren<IDropDown>> = ({
  cls,
  isOpen,
  onClick,
  onBlur,
  onFocus,
  items,
  children
}) => {
  return (
    <div
      className={classNames(styles.wrapper, {}, [cls])}
      data-testid="DropDown"
      tabIndex={0}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {children}
      <ul className={classNames(styles.Menu, { [styles.open]: isOpen }, [cls])}>
        {items.length ? (
          items.map((item) => {
            return (
              <li
                data-testid="DropDownMenuItems"
                onClick={() => onClick(item)}
                className={classNames(styles.menuItem, {}, [])}
                key={item.id}
              >
                {item.Icon && <item.Icon className={styles.icon} />}
                {item.label}
              </li>
            );
          })
        ) : (
          <Empty description={<div>{"empty description"}</div>} />
        )}
      </ul>
    </div>
  );
};
