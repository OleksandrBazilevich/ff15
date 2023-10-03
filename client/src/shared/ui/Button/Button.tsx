import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import { classNames } from "shared/lib";

import styles from "./Button.module.scss";

export type ButtonTheme = "default" | "clean" | "primary" | "icon";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  cls?: string;
  theme?: ButtonTheme;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button: FC<PropsWithChildren<IButton>> = ({
  cls,
  theme = "default",
  fullWidth = false,
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        styles.Button,
        {
          [styles.fullwidth]: fullWidth,
          [styles.disabled]: disabled
        },
        [cls, styles[theme]]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
