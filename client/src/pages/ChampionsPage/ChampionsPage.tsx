import { useTranslation } from "react-i18next";

const ChampionsPage = () => {
  const { t } = useTranslation("champions");
  return (
    <div>
      <p>{t("champions")}</p>
    </div>
  );
};

export default ChampionsPage;
