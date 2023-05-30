/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import AnyUser from "../icons/AnyUser";
import useAuth from "../hooks/useAuth";

export default function UserMenu() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const img_url = `http://localhost:8080/pic/${user?.image}?${new Date().getTime()}`;

  const menuClick = (e) => {
    // console.log(e.target)
    e.target.blur();
  };

  const hdlLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };

  return (
    <div className="flex gap-3 items-center">
      <div className="w-16">
        {user?.image ? <img src={img_url} className="block p-1 ms-2" /> : <AnyUser />}
      </div>
      <p className="text-2xl">{user?.name || "Guest"}</p>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn px-1 inline rounded-btn text-gray-100 ">
          v
        </label>
        <ul
          tabIndex={0}
          className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-40 mt-4 ms-5"
          onClick={menuClick}
        >
          {!user && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/addtodo">Add Job</Link>
              </li>
              <li>
                <Link to="/editprofile">Profile</Link>
              </li>
              <li>
                <Link to="/logout" onClick={(e) => hdlLogout(e)}>
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
