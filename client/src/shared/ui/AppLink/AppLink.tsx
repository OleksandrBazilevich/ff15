import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib";

import styles from "./AppLink.module.scss";

type AppLinkTheme = "default" | "primary" | "clean";
interface IAppLink extends LinkProps {
  cls?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<PropsWithChildren<IAppLink>> = ({
  cls,
  children,
  theme = "default",
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className={classNames(styles.AppLink, {}, [cls, styles[theme]])}
    >
      {children}
    </Link>
  );
};
