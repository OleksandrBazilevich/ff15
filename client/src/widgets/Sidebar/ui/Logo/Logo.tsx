import { FC } from "react";

import { classNames } from "shared/lib";
import { AppLink } from "shared/ui/AppLink/AppLink";

import styles from "./Logo.module.scss";

interface ILogo {
  cls?: string;
}

export const Logo: FC<ILogo> = ({ cls }) => {
  return (
    <div
      data-testid="sidebarLogo"
      className={classNames(styles.Logo, {}, [cls])}
    >
      <AppLink to={"/"}>
        <h1>
          FF<span>15</span>
        </h1>
      </AppLink>
    </div>
  );
};
