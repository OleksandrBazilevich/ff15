import { useTranslation } from "react-i18next";

const HighlightsPage = () => {
  const { t } = useTranslation("highlights");
  return (
    <div>
      <p>{t("highlights")}</p>
    </div>
  );
};

export default HighlightsPage;
