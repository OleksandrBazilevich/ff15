import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      <p>{t("main")}</p>
    </div>
  );
};

export default MainPage;
