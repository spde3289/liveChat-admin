import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
interface MenuItemProps {
  children: ReactElement;
  path: string;
}

const MenuItem = ({ children, path }: MenuItemProps) => {
  const location = useLocation();

  console.log(location.pathname);

  const currentIndex =
    location.pathname.replace("/", "") === path.replace("/", "")
      ? "rounded-2xl bg-slate-600"
      : "";

  return (
    <li
      className={` ${currentIndex}  flex w-full h-16 items-center justify-center `}
    >
      <Link to={path}>{children}</Link>
    </li>
  );
};

export default MenuItem;
