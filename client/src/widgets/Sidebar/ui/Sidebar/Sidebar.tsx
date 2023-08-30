import { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CollapseArrowIcon } from "shared/assets";
import { classNames } from "shared/lib";
import { Button, Menu } from "shared/ui";
import { IMenuItem } from "shared/ui/Menu/Menu";

import { items } from "../../config/MenuItemsList";
import { Logo } from "../Logo/Logo";

import styles from "./Sidebar.module.scss";

interface ISidebar {
  cls?: string;
}

export const Sidebar: FC<ISidebar> = ({ cls }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const onClick = (item: IMenuItem) => {
    navigate(item.link || "");
  };
  const onCollapse = useCallback(() => {
    document.documentElement.style.setProperty(
      "--sidebar-width",
      isCollapsed ? "300px" : "65px"
    );
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <div
      data-testid="sidebar"
      className={classNames(
        styles.Sidebar,
        { [styles.collapsed]: isCollapsed },
        [cls]
      )}
    >
      <Logo cls={classNames("", { [styles.collapsedLogo]: isCollapsed })} />
      <Menu items={items} onClick={onClick} isCollapsed={isCollapsed} />
      <Button
        cls={styles.collapse}
        theme="clean"
        data-testid="toggleBtn"
        onClick={onCollapse}
      >
        <CollapseArrowIcon />
      </Button>
    </div>
  );
};
