import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Paths from "./path";
import HomePage from "./Mome";
import MessagePage from "./Message";
import RootLayout from "@/component/RootLayout/RootLayout";
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
