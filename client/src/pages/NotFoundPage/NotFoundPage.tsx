import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { classNames } from "shared/lib";
import { Button } from "shared/ui";

import styles from "./NotFoundPage.module.scss";

interface INotFoundPage {
  cls?: string;
}

export const NotFoundPage: FC<INotFoundPage> = ({ cls }) => {
  const { t } = useTranslation("notFound");
  const navigate = useNavigate();
  return (
    <div className={classNames(styles.NotFoundPage, {}, [cls])}>
      <h1>{t("error")}</h1>
      <h2>{t("description")}</h2>
      <Button onClick={() => navigate("/")} theme="default">
        {t("btn")}
      </Button>
    </div>
  );
};
