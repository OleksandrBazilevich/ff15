import { useTranslation } from "react-i18next";

const ProfilePage = () => {
  const { t } = useTranslation("profile");
  return (
    <div>
      <p>{t("profile")}</p>
    </div>
  );
};

export default ProfilePage;
