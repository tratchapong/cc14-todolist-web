/* eslint-disable no-unused-vars */
import {useForm} from 'react-hook-form'
import Joi from 'joi';
import { joiResolver } from '@hookform/resolvers/joi';
import {login, getMe} from '../api/todoApi'
import { useNavigate } from 'react-router-dom';
import useAuth  from "../hooks/useAuth";

const LoginSchema = Joi.object({
  username : Joi.string().alphanum().min(3).required(),
  password : Joi.string().min(3).required(), 
})

function Login() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: joiResolver(LoginSchema)
  })
  const navigate = useNavigate()
  const {setUser} = useAuth()

  const onSubmit = formData => {
    login(formData)
    .then( rs => {
      localStorage.setItem('token', rs.data.token)
      return getMe(rs.data.token)
    }).then( rs => {
      setUser(rs.data)
      navigate('/')
    }).catch( err => alert(err.response?.data.error || err.message))
  }

  return (
    <div className="w-full max-w-[800px] mx-auto my-6 p-5 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-5 text-xl">Login Form</h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-user text-white min-w-[50px] text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="text"
            placeholder="Username"
            {...register('username')}
          />
        </div>
        { errors.username && <p className='text-red-500 mb-4 mt-[-12px]'>{errors.username.message}</p>}

        <div className="flex w-full mb-4">
          <i className="fa fa-key  text-white min-w-[50px] text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
        </div>
        { errors.password && <p className='text-red-500 mb-4 mt-[-12px]'>{errors.password.message}</p>}
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
