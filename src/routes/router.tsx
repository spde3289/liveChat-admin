import RootLayout from '@/component/RootLayout/RootLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './Home'
import MessagePage from './Message'
import NotFound from './NotFound'
import Paths from './path'

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: Paths.message,
        element: <MessagePage />,
      },
    ],
  },
])

export const CreateRouterProvider = () => <RouterProvider router={router} />
