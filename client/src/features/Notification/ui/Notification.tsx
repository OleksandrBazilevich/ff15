import { FC, useState } from "react";

import { NotificationIcon } from "shared/assets";
import { Button } from "shared/ui";
import { DropDown, IDropDownMenuItem } from "shared/ui/DropDown/DropDown";

import { NotificationBadge } from "./NotificationBadge/NotificationBadge";

import styles from "./Notification.module.scss";

export const Notification: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const data: IDropDownMenuItem[] = [
    {
      label: "new update 1",
      id: "1"
    },
    {
      label: "new update 2",
      id: "2"
    },
    {
      label: "new update 3",
      id: "3"
    },
    {
      label: "new update 4",
      id: "4"
    }
  ];
  return (
    <DropDown isOpen={isOpen} items={data} onClick={handleClick}>
      <Button onClick={handleClick} theme="clean" cls={styles.btn}>
        <NotificationBadge count={data.length} />
        <NotificationIcon className={styles.icon} />
      </Button>
    </DropDown>
  );
};
