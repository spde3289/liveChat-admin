import { TfiDashboard } from "react-icons/tfi";
import { TbMessages } from "react-icons/tb";
import { Paths } from "@/routes";
import MenuItem from "./item";

const SideBar = () => {
  return (
    <>
      <nav className="w-16 h-screen inline-block bg-base text-white pt-5">
        <ul className="text-white flex flex-col h-full font-extrabold items-center">
          <MenuItem path={Paths.Home}>
            <TfiDashboard size={32} className="" />
          </MenuItem>
          <MenuItem path={Paths.message}>
            <TbMessages size={32} className="" />
          </MenuItem>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
