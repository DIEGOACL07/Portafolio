import { RiAccountPinCircleLine, RiBriefcase2Line, RiHome4Line } from "react-icons/ri";

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome4Line size="30" />,
  },
{
    name: "about",
    path: "/about",
    icon: <RiAccountPinCircleLine size="30" />,
  },
  {
    name: "work",
    path: "/works",
    icon: <RiBriefcase2Line size="30" />,
  },
];
