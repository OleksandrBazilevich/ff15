import {
  AdminIcon,
  ChampionsIcon,
  HighlightsIcon,
  HomeIcon,
  LiderboardsIcon,
  ProfileIcon
} from "shared/assets";
import { IMenuItem } from "shared/ui/Menu/Menu";

export const items: IMenuItem[] = [
  { label: "Home", link: "/", id: "1", Icon: HomeIcon },
  { label: "Profile", link: "/profile", id: "2", Icon: ProfileIcon },
  { label: "Highlights", link: "/highlights", id: "3", Icon: HighlightsIcon },
  { label: "Champions", link: "/champions", id: "4", Icon: ChampionsIcon },
  {
    label: "Liderboards",
    link: "/liderboards",
    id: "5",
    Icon: LiderboardsIcon
  },
  { label: "Admin", link: "/admin", id: "6", Icon: AdminIcon }
];
