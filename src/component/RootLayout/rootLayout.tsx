import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full flex-1">
          <Outlet />
        </main>
      </div>
    </>
  )
};

export default RootLayout;
