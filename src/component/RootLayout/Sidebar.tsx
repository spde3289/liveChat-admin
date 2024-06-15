import { Link } from "react-router-dom"
import { Paths } from "@/routes";

const SideBar = () => {
  return (
    <>
      <nav className="w-48 h-screen inline-block bg-base text-white">
        <ul className="text-white *:m-3 flex flex-col h-full justify-center font-extrabold">
          <li className="">
            <Link to={Paths.dashboard}>Dashboard</Link>
          </li>
          <li className="">
            <Link to={Paths.massage}>Massage </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar