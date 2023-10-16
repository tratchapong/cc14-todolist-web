/* eslint-disable no-unused-vars */
// https://stackoverflow.com/questions/73816951/how-to-provide-dynamic-custom-props-to-react-router-6-4-route
// we can use createBrowserRouter inside the function Component

import { RouterProvider, createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import NotFound from '../pages/NotFound'
import Header from "../pages/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GuestHome from "../pages/GuestHome";
import FormAddTodo from "../pages/FormAddTodo";
import FormUpdateTodo from "../pages/FormUpdateTodo";
import EditProfile from "../pages/EditProfile";

export default function Router() {
  const { user } = useAuth();
  console.log('Router...', user)

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),
      errorElement: <NotFound />,
      children:  [
        {
          index: true,
          element: user ? <Home /> : <GuestHome />
        },
        {
          path: 'login',
          element: user ? <NotFound /> : <Login />
        },
        {
          path: 'register',
          element: user ? <NotFound /> : <Register />
        },
        {
          path: "addtodo",
          element: user ? <FormAddTodo /> : <Navigate to='/' />
        },
        {
          path: "updatetodo/:id",
          element: user ? <FormUpdateTodo /> : <Navigate to='/' />
        },
        {
          path: "editprofile",
          element: user ? <EditProfile /> : <Navigate to='/' />
        },
      ]}
    ] 
  );

  return <RouterProvider router={router} />;
}
