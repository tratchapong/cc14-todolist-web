import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
    const navigate = useNavigate()
    const { user, logout } = useAuth();

    const hdlLogout = (e) => {
      e.preventDefault();
      logout();
      navigate("/");
    };
    
    return (
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
                    <NavLink className="navlink" to="/editprofile">
                        Profile
                    </NavLink>

                    <NavLink className="navlink" onClick={(e) => hdlLogout(e)} to="/logout">
                        Logout
                    </NavLink>
                    {/* <NavLink className="navlink notshow" to="/updatetodo">
                        **No Show**
                    </NavLink> */}
                </>
            )}
        </nav>
    )
}