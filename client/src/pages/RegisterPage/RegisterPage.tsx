import { useTranslation } from "react-i18next";

import { RegisterForm } from "widgets/Auth";

import { SkullIcon, clip } from "shared/assets";
import { LiveBackground } from "shared/ui";

import styles from "./RegisterPage.module.scss";

const RegisterPage = () => {
  const { t } = useTranslation("auth");
  return (
    <LiveBackground clip={clip}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <h1>
            <SkullIcon height={56} width={56} />
            FF<span>15</span>
          </h1>
          <h3>
            {t("Join")}
            <span className={styles.sublogo}>
              FF<span>15</span>
            </span>
            {t("and improve your game now!")}
          </h3>
        </div>
        <RegisterForm />
      </div>
    </LiveBackground>
  );
};

export default RegisterPage;
