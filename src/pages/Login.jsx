/* eslint-disable no-unused-vars */
import {useState} from 'react'
import {login, getMe} from '../api/todoApi'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const navigate = useNavigate()
  const {user, setUser} = useAuth()
  const [input, setInput] = useState({
    username: '',
    password: '',
  })
  const hdlChangeInput = (e) => {
    setInput({...input, [e.target.name] : e.target.value })
  }

  const hdlSubmit = e => {
    e.preventDefault()
    login(input)
    .then( rs => {
      localStorage.setItem('token', rs.data.token)
      return getMe(rs.data.token)
    }).then( rs => {
      setUser(rs.data)
      navigate('/')
    }).catch( err => console.log(err))
  }

  return (
    <div className="w-full max-w-[800px] mx-auto my-6 p-5 border">
      <form onSubmit={hdlSubmit}>
        <h2 className="mb-5 text-xl">Login Form</h2>
        <div className="flex w-full mb-[15px]">
          <i className="fa fa-user text-white min-w-[50px] text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="text"
            placeholder="Username"
            name="username"
            value={input.username}
            onChange={hdlChangeInput}
          />
        </div>
        <div className="flex w-full mb-[15px]">
          <i className="fa fa-key  text-white min-w-[50px] text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={hdlChangeInput}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white cursor-pointer w-full opacity-90 px-5 py-4 my-5 border-none hover:opacity-100"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
