import { ChangeEvent, FC, InputHTMLAttributes } from "react";

import { classNames } from "shared/lib";

import styles from "./Field.module.scss";

interface IField extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  Icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  setValue: (value: string) => void;
  placeholder?: string;
  cls?: string;
}

export const Field: FC<IField> = ({
  cls,
  setValue,
  Icon,
  value,
  placeholder,
  ...rest
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };
  return (
    <div className={classNames(styles.Field, {}, [cls])}>
      <Icon className={styles.icon} />
      <input
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};
