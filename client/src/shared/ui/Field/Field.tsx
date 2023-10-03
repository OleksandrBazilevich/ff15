import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

import { HidePasswordIcon, ShowPasswordIcon } from "shared/assets";
import { classNames } from "shared/lib";

import styles from "./Field.module.scss";

type FieldColor = "normal" | "error";

type IconsPosition = "start" | "end";

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  setValue?: (value: string) => void;
  placeholder?: string;
  cls?: string;
  iconPosition?: IconsPosition;
  color?: FieldColor;
}

export const Field: FC<IField> = ({
  cls,
  setValue,
  Icon,
  value,
  placeholder,
  className,
  iconPosition = "start",
  color = "normal",
  type,
  ...rest
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = () => {
    if (type != "password") return type;
    if (showPassword) return "text";
    if (!showPassword) return "password";
  };

  return (
    <div
      className={classNames(
        styles.Field,
        { [styles.error]: color === "error" },
        [cls, className]
      )}
    >
      {Icon && (
        <Icon className={classNames(styles.icon, {}, [styles[iconPosition]])} />
      )}

      {type === "password" &&
        (showPassword ? (
          <HidePasswordIcon
            className={classNames(styles.icon, {}, [
              styles.end,
              styles.passwordIcon
            ])}
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <ShowPasswordIcon
            className={classNames(styles.icon, {}, [
              styles.end,
              styles.passwordIcon
            ])}
            onClick={() => setShowPassword(!showPassword)}
          />
        ))}
      <input
        type={getInputType()}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};
