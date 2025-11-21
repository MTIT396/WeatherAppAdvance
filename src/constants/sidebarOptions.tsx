import { GoBell } from "react-icons/go";
import { HiOutlineCalendar } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TbMap } from "react-icons/tb";

type SidebarOption = {
  icon: React.ReactNode;
};

export const sidebarOptions: SidebarOption[] = [
  {
    icon: <TbMap size={24} />,
  },
  {
    icon: <HiOutlineCalendar size={24} />,
  },
  {
    icon: <GoBell size={24} />,
  },
  {
    icon: <IoSettingsOutline size={24} />,
  },
];
