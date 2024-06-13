import { Route, Routes, Outlet } from "react-router-dom";
import RootLayout from "@/component/RootLayout/rootLayout";
import { Paths, Router } from "@/routes";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path={Paths.Home} element={<Outlet />}>
            <Route path="" element={Router.Home} />
            <Route path={Paths.dashboard} element={Router.dashboard} />
            <Route path={Paths.massage} element={Router.massage} />
          </Route>
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
