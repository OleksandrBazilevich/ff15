import { FC } from "react";
import { useTranslation } from "react-i18next";

import { SearchIcon } from "shared/assets";
import { Field } from "shared/ui";
import { DropDown } from "shared/ui/DropDown/DropDown";

import { useSearch } from "../lib/useSearch";

export const SearchField: FC = () => {
  const { t } = useTranslation();

  const {
    data,
    query,
    handleChange,
    handleClick,
    isOpen,
    closeMenu,
    openMenu
  } = useSearch();

  return (
    <DropDown
      isOpen={isOpen}
      items={data}
      onClick={handleClick}
      onFocus={openMenu}
      onBlur={closeMenu}
    >
      <Field
        Icon={SearchIcon}
        value={query}
        setValue={handleChange}
        placeholder={t("search-placeholder")}
      />
    </DropDown>
  );
};
