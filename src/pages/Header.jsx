import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const hdlLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };
  return (
    <div className="flex justify-between items-end w-full p-2 bg-lime-400 h-[80px]">
      <div className="flex-1 flex gap-3 items-center">
        <div className="w-16">
          <img src="https://www.svgrepo.com/show/513347/shop.svg" className="block p-1 ms-2" />
        </div>
        <p className="text-2xl">{user?.name || "Guest"}</p>
      </div>

      <nav className="flex gap-4">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        {!user && (
          <>
            <NavLink className="navlink" to="/login">
              Login
            </NavLink>
            <NavLink className="navlink" to="/register">
              Register
            </NavLink>
          </>
        )}
        {user && (
          <>
            <NavLink className="navlink" to="/addtodo">
              Add Job
            </NavLink>
            <NavLink className="navlink" onClick={(e) => hdlLogout(e)} to="/logout">
              Logout
            </NavLink>
          </>
        )}
      </nav>
    </div>
  );
}
