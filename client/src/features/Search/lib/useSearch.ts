import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { IDropDownMenuItem } from "shared/ui/DropDown/DropDown";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleChange = (value: string) => {
    setQuery(value);
    setIsOpen(true);
  };

  const handleClick = (item: IDropDownMenuItem) => {
    navigate(item.link || "");
    closeMenu();
  };

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const getData = (query: string) => {
    if (query !== "") {
      return [
        { label: "test", id: "1", link: "/test" },
        { label: "test4", id: "2", link: "/test" },
        { label: "xd", id: "3", link: "/test" },
        { label: "ffff", id: "4", link: "/test" }
      ].filter((value) => value.label.includes(query));
    }

    return [];
  };

  const data = getData(query);

  return {
    data,
    handleChange,
    handleClick,
    openMenu,
    closeMenu,
    query,
    isOpen
  };
};
