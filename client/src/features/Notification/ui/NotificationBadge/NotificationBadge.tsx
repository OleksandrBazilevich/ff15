import { FC } from "react";

import { classNames } from "shared/lib";
import { reduceNumToTens } from "shared/lib/reduceNum/reduceNumToTens";

import styles from "./NotificationBadge.module.scss";

interface INotificationBadge {
  cls?: string;
  count: number;
}

export const NotificationBadge: FC<INotificationBadge> = ({ cls, count }) => {
  return (
    <div className={classNames(styles.NotificationBadge, {}, [cls])}>
      {reduceNumToTens(count)}
    </div>
  );
};
