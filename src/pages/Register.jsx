import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const hdlChangeInput = (e) => {
    setInput({...input, [e.target.name] : e.target.value })
  }

  const hdlSubmit = e => {
    e.preventDefault()
    if(input.password !== input.confirmPassword)
      return alert('Please check Password & Confirm Password')
    axios.post('http://localhost:8080/auth/register', input)
    .then( rs => {
      console.log(rs.data)
      navigate('/login')
    }).catch(err => console.log(err.response.data))
  }

  return (
    <div className="the-form w-full max-w-[800px] mx-auto my-6 p-5 border">
      <form onSubmit={hdlSubmit}>
        <h2 className="mb-5 text-xl">Register Form </h2>
        <div className="flex w-full mb-[15px]">
          <i className="fa fa-user text-white w-12 text-center p-2.5 bg-blue-500" />
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
          <i className="fa fa-key  text-white w-12 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="password"
            placeholder="Password"
            name="password"
            value={input.password}
            onChange={hdlChangeInput}
          />
        </div>
        <div className="flex w-full mb-[15px]">
          <i className="fa fa-key  text-white w-12 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={hdlChangeInput}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white cursor-pointer w-full opacity-90 px-5 py-4 my-5 border-none hover:opacity-100"
        >
          Register
        </button>
      </form>
    </div>
  );
}
