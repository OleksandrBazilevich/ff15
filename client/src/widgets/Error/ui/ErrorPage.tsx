import { FC } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib";

import styles from "./ErrorPage.module.scss";

interface IErrorPage {
  cls?: string;
}

export const ErrorPage: FC<IErrorPage> = ({ cls }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ErrorPage, {}, [cls])}>
      <h1>{t("error msg")}</h1>
    </div>
  );
};
