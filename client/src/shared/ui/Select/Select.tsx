import { FC, useState } from "react";

import { SelectArrowIcon } from "shared/assets";
import { classNames } from "shared/lib";

import styles from "./Select.module.scss";

export interface IOption {
  label: string;
  value: string;
}

interface ISelect {
  cls?: string;
  selectedOption: IOption;
  onSelect: (option: IOption) => void;
  options: IOption[];
}

export const Select: FC<ISelect> = ({
  cls,
  options,
  selectedOption,
  onSelect
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option: IOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className={styles.wrapper}
      tabIndex={0}
      onBlur={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
    >
      <div
        onClick={() => setIsOpen(true)}
        data-testid="Select"
        className={classNames(styles.Select, {}, [cls])}
      >
        <div data-testid="selectedOptionLabel">{selectedOption.label}</div>
        <SelectArrowIcon
          className={classNames(styles.icon, {
            [styles.open]: isOpen
          })}
        />
      </div>
      <ul
        data-testid="selectMenu"
        className={classNames(styles.Menu, { [styles.open]: isOpen }, [cls])}
      >
        {options.map((item) => {
          return (
            <li
              data-testid="selectMenuItem"
              className={classNames(styles.menuItem, {}, [])}
              key={item.value}
              onClick={() => handleChange(item)}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
