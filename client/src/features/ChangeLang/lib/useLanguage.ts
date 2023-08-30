import { useState } from "react";
import { useTranslation } from "react-i18next";

import { IOption } from "shared/ui/Select/Select";

import { languages } from "../config/languages";

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const defaultLang = i18n.language;
  const [lang, setLang] = useState(defaultLang);

  const changeLang = ({ value }: IOption) => {
    setLang(value);
    i18n.changeLanguage(value);
  };

  const langOptions: IOption[] = languages.map((lang) => ({
    label: lang.name,
    value: lang.code
  }));

  return {
    langOptions,
    lang,
    changeLang
  };
};
