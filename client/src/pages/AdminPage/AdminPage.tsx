import { useTranslation } from "react-i18next";

const AdminPage = () => {
  const { t } = useTranslation("admin");
  return (
    <div>
      <p>{t("admin")}</p>
    </div>
  );
};

export default AdminPage;
