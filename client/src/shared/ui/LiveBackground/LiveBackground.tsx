import { FC, PropsWithChildren } from "react";

import styles from "./LiveBackground.module.scss";

interface ILiveBackground {
  clip: string;
}

export const LiveBackground: FC<PropsWithChildren<ILiveBackground>> = ({
  clip,
  children
}) => {
  return (
    <div className={styles.wrapper}>
      <video
        className={styles.background}
        draggable={false}
        autoPlay
        loop
        muted
      >
        <source src={clip} type="video/mp4" />
      </video>
      {children}
    </div>
  );
};
