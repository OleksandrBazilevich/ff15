import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib";

import styles from "./AppLink.module.scss";

interface IAppLink extends LinkProps {
  cls?: string;
}

export const AppLink: FC<PropsWithChildren<IAppLink>> = ({
  cls,
  children,
  ...rest
}) => {
  return (
    <Link {...rest} className={classNames(styles.AppLink, {}, [cls])}>
      {children}
    </Link>
  );
};
