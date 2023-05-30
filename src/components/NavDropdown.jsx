/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

export default function NavDropdown() {

  const menuClick = e => {
    // console.log(e.target)
    e.target.blur()
  }
  return (
    <div className="navbar bg-base-300 rounded-box" >
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-lg font-bold">daisyUI</a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn" >Button</a>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              User
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              onClick={menuClick}
            >
              <li  >
                <Link to='/login' >Login</Link>
              </li>
              <li >
                <Link to='/register'>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
