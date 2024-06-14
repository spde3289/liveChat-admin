import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Paths from "./path";
import HomePage from "./home";
import DashboardPage from "./dashBoard";
import MassagePage from "./massage";
import RootLayout from "@/component/RootLayout/rootLayout";


const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: Paths.dashboard,
        element: <DashboardPage />,
      },
      {
        path: Paths.massage,
        element: <MassagePage />,
      },
    ],
  },
]);

export const CreateRouterProvider: any = () => (
   <RouterProvider router={router} />
);