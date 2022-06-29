import { IoHomeSharp, IoPersonSharp } from "react-icons/io5";
import { GiClick } from "react-icons/gi";

const dataSidebar = [
  {
    id: 1,
    icon: <IoHomeSharp />,
    name: "Dashboard",
    page: "/dashboard",
  },
  {
    id: 2,
    icon: <IoPersonSharp />,
    name: "Profil Siswa",
    page: "/profil",
  },
  {
    id: 3,
    icon: <GiClick />,
    name: "Kehadiran Hari ini",
    page: "/kehadiran",
  },
];

export default dataSidebar;
