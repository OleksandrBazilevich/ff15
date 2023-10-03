import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";
import { Field, IField } from "shared/ui";

import { Erorrs } from "../../lib/useForm";

import styles from "./AuthField.module.scss";

interface IAuthField extends IField {
  errors?: Erorrs;
}

export const AuthField: FC<IAuthField> = ({
  errors,
  name,
  placeholder,
  ...rest
}) => {
  const { t } = useTranslation("auth");
  const error = errors[name];
  return (
    <div className={classNames(styles.AuthField, {}, [])}>
      <Field
        color={error ? "error" : "normal"}
        name={name}
        placeholder={t(placeholder)}
        className={styles.field}
        {...rest}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
