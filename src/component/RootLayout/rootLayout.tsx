import Sidebar from "./Sidebar";

interface RootLayout {
  children: JSX.Element;
}

const RootLayout = ({ children }: RootLayout) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default RootLayout;
