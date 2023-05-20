import {RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'
// import NotFound from '../pages/NotFound'
import Header from '../pages/Header'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'


export default function Router() {
  const {user} = useAuth()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Header />
        <Outlet />
      </>,
      errorElement: <Navigate to="/" />,
      children : [
        {
          index: true,
          element: <Home />
        },
        {
          path: "login",
          element: !user ? <Login /> : <Navigate to="/" />,
        },
        {
          path: "register",
          element: !user ? <Register /> : <Navigate to="/" />,
        },
      ]
    },
  ])

  return <RouterProvider router={router} />
}