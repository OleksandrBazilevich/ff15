import { FC } from "react";
import { useTranslation } from "react-i18next";

import { AuthField, useForm } from "features/Auth";

import { FacebookIcon, GoogleIcon, TwitterIcon } from "shared/assets";
import { classNames } from "shared/lib";
import { AppLink, Button, Hr } from "shared/ui";

import styles from "./RegisterForm.module.scss";

interface FormData {
  email: string;
  username: string;
  password: string;
}

const IconButtons: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  GoogleIcon,
  FacebookIcon,
  TwitterIcon
];

export const RegisterForm: FC = () => {
  const {
    handleSubmit,
    register,
    hasErrors,
    formState: { errors }
  } = useForm<FormData>({
    email: "",
    username: "",
    password: ""
  });

  const { t } = useTranslation("auth");

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className={classNames(styles.RegisterForm, {}, [])}>
      <div className={styles.socialmediaButtons}>
        {IconButtons.map((Icon, index) => {
          return (
            <Button theme="icon" key={index}>
              <Icon width={30} height={30} />
            </Button>
          );
        })}
      </div>
      <div className={styles.divider}>
        <Hr />
        <div className={styles.text}>{t("or use email")}</div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <AuthField
          errors={errors}
          placeholder="enter the email"
          type="email"
          {...register("email", {
            required: true,
            regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
          })}
        />
        <AuthField
          errors={errors}
          placeholder="enter the username"
          type="text"
          {...register("username", { required: true })}
        />
        <AuthField
          errors={errors}
          placeholder="enter the password"
          type="password"
          {...register("password", { required: true })}
        />
        <Button disabled={hasErrors} theme="primary" fullWidth>
          {t("Register")}
        </Button>
      </form>
      <div className={styles.wrapper}>
        {t("Already have an account ?")}
        <AppLink theme="primary" to={"/Login"}>
          {t("Login")}
        </AppLink>
      </div>
    </div>
  );
};
