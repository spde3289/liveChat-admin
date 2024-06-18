import { TfiDashboard } from "react-icons/tfi";
import { TbMessages } from "react-icons/tb";
import { Paths } from "@/routes";
import MenuItem from "./item";

const icon = {
  size: 32,
  className:""
}

const SideBar = () => {
  return (
    <>
      <nav className="w-16 h-screen inline-block bg-base text-white pt-5">
        <ul className="text-white flex flex-col h-full font-extrabold items-center">
          <MenuItem path={Paths.Home}>
            <TfiDashboard {...icon} />
          </MenuItem>
          <MenuItem path={Paths.message}>
            <TbMessages {...icon} />
          </MenuItem>
        </ul>
      </nav>
    </>
  );
};


export default SideBar;
