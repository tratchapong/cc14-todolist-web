import {RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
import NotFound from '../pages/NotFound'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <nav className="p-3 bg-pink-400">Navbar</nav>
        <Outlet />
      </>,
      errorElement: <NotFound />,
      // errorElement: <Navigate to="/" />,
      // errorElement: <h1 className='text-2xl text-red-500'>Page not found</h1>,
      children : [
        {
          index: true,
          element: <h1>HomePage</h1>
        },
        {
          path: "login",
          element: <><h1>Login Page</h1></>,
        },
        {
          path: "register",
          element: <><h1>Register Page</h1></>,
        },
      ]
    },


  ])

  return <RouterProvider router={router} />
}