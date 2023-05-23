import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
    const { logout } = useAuth();

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
                    {/* <NavLink className="navlink" style={{display: 'none'}} to="/updatetodo"> */}
                    <NavLink className="navlink notshow" to="/updatetodo">
                        Update Job
                    </NavLink>
                    <NavLink className="navlink" onClick={(e) => hdlLogout(e)} to="/logout">
                        Logout
                    </NavLink>
                </>
            )}
        </nav>
    )
}