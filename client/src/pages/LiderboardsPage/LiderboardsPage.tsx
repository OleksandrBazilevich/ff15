import { useTranslation } from "react-i18next";

const LiderboardsPage = () => {
  const { t } = useTranslation("liderboards");
  return (
    <div>
      <p>{t("liderboards")}</p>
    </div>
  );
};

export default LiderboardsPage;
