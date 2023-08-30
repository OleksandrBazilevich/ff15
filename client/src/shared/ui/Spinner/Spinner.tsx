import { FC } from "react";

import { classNames } from "shared/lib";

import styles from "./Spinner.module.scss";

interface ISpinner {
  cls?: string;
}

export const Spinner: FC<ISpinner> = ({ cls }) => {
  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.loader, {}, [cls])}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
