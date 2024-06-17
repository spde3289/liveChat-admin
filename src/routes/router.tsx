import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Paths from "./path";
import HomePage from "./home";
import MessagePage from "./message";
import RootLayout from "@/component/RootLayout/rootLayout";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: Paths.message,
        element: <MessagePage />,
      },
    ],
  },
]);

export const CreateRouterProvider: any = () => (
  <RouterProvider router={router} />
);
