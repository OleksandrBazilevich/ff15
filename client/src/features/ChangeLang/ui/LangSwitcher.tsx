import { FC } from "react";

import { Select } from "shared/ui";

import { useLanguage } from "../lib/useLanguage";

interface ILangSwitcher {
  cls?: string;
}

export const LangSwitcher: FC<ILangSwitcher> = () => {
  const { lang, changeLang, langOptions } = useLanguage();

  const selectedLang = langOptions.find(({ value }) => lang === value);

  return (
    <Select
      selectedOption={selectedLang}
      onSelect={changeLang}
      options={langOptions}
    />
  );
};
