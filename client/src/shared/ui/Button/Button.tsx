import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import { classNames } from "shared/lib";

import styles from "./Button.module.scss";

export type ButtonTheme = "default" | "clean" | "primary";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  cls?: string;
  theme?: ButtonTheme;
}

export const Button: FC<PropsWithChildren<IButton>> = ({
  cls,
  theme = "default",
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(styles.Button, {}, [cls, styles[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};
