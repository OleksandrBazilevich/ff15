import React, { FC } from "react";

import { NoDataIcon } from "shared/assets";
import { classNames } from "shared/lib";

import styles from "./Empty.module.scss";

interface IEmpty {
  cls?: string;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  description?: React.ReactNode;
}

export const Empty: FC<IEmpty> = ({ cls, Icon = NoDataIcon, description }) => {
  return (
    <div data-testid="Empty" className={classNames(styles.Empty, {}, [cls])}>
      <Icon className={styles.icon} />
      {description}
    </div>
  );
};
