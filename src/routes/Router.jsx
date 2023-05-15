import {RouterProvider, createBrowserRouter, Outlet} from 'react-router-dom'
import NotFound from '../pages/NotFound'
import Header from '../pages/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header />
        <Outlet />
      </>,
      errorElement: <NotFound />,
      children : [
        {
          index: true,
          element: <Home />
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ]
    },
  ])

  return <RouterProvider router={router} />
}