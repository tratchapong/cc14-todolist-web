/* eslint-disable no-unused-vars */
import {useForm} from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { register as registerApi} from '../api/todoApi'
import { useNavigate } from 'react-router-dom'
import Joi from  'joi'


const RegisterSchema = Joi.object({
  username : Joi.string().alphanum().min(3).required(),
  password : Joi.string().min(3).required(),
  confirmPassword : Joi.ref('password')
})

export default function Register() {
  const navigate = useNavigate()
  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: joiResolver(RegisterSchema)
  })

  const onSubmit = formData => {
    registerApi(formData)
    .then( rs => {
      console.log(rs.data)
      navigate('/login')
    }).catch(err => console.log(err.response?.data.error || err.message))
  }

  const onSubmit1 = formData => {
    console.log(formData)
  }

  return (
    <div className="the-form w-full max-w-[800px] mx-auto my-6 p-5 border">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="mb-5 text-xl">Register Form </h2>
        <div className="flex w-full mb-4">
          <i className="fa fa-user text-white w-12 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="text"
            placeholder='Username'
            {...register('username')}
          />
        </div>
          { errors.username && <p className='text-red-500 mb-4 mt-[-12px]'>{errors.username.message}</p>}
        <div className="flex w-full mb-[15px]">
          <i className="fa fa-key  text-white w-12 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="password"
            placeholder="Password"
            {...register('password')}
          />
        </div>
          { errors.password && <p className='text-red-500 mb-4 mt-[-12px]'>{errors.password.message}</p>}
        <div className="flex w-full mb-[15px]">
          <i className="fa fa-key  text-white w-12 text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword')}
          />
        </div>
          { errors.confirmPassword && <p className='text-red-500 mb-4 mt-[-12px]'>{`Confirm Password didn't match`}</p>}
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
