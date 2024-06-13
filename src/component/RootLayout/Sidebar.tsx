import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <>
      <nav className="w-32 h-screen inline-block bg-base text-white">
        <ul className="text-white *:m-3 flex flex-col h-full justify-center">
          <li className="">
            <Link to="dashboard">dashboard </Link>
          </li>
          <li className="">
            <Link to="massage">massage </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideBar