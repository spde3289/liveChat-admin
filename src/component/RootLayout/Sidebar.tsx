import { MdDashboard } from "react-icons/md";
import { TbMessages } from "react-icons/tb";
import { Paths } from "@/routes";
import MenuItem from "./item";

const icon = {
  size: 28,
  className: "",
};

const className = "mr-2";

const SideBar = () => {
  return (
    <>
      <nav className="w-48 h-screen inline-block bg-base text-white ">
        <div className="text-slate-400 pt-3 pl-2 mb-3 text-sm">MAIN MENU</div>
        <ul className="text-white flex flex-col w-full font-extrabold items-center">
          <MenuItem path={Paths.Home}>
            <>
              <MdDashboard {...icon} className={className} />
              Dashboard
            </>
          </MenuItem>
          <MenuItem path={Paths.message}>
            <>
              <TbMessages {...icon} className={className} />
              Messages
            </>
          </MenuItem>
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
