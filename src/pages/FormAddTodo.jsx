/* eslint-disable no-unused-vars */
import {useState} from 'react'
import {addTodo} from '../api/todoApi'
import { useNavigate } from 'react-router-dom';
import useAuth  from "../hooks/useAuth";


export default function FormAddTodo() {
  const navigate = useNavigate()
  const {user, setUser} = useAuth()
  const [input, setInput] = useState({
    title: '',
    dueDate: ''
  })

  const hdlChangeInput = (e) => {
    setInput({...input, [e.target.name] : e.target.value })
  }

  const hdlSubmit = e => {
    e.preventDefault()
    let token = localStorage.getItem('token')
    console.log(token)
    addTodo(input, token).then(rs => {
      // console.log(rs)
      navigate('/')
    })
  } 
  return (
    <div className="w-full max-w-[800px] mx-auto my-6 p-5 border">
      <form onSubmit={hdlSubmit}>
        <h2 className="w-2/3 mx-auto mb-5 text-xl">Add todo</h2>
        <div className="flex w-2/3 mb-[15px] mx-auto">
          <i className="fa fa-comment text-white min-w-[50px] text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="text"
            placeholder="Job"
            name="title"
            value={input.title}
            onChange={hdlChangeInput}
          />
        </div>
        <div className="flex w-2/3 mb-[15px] mx-auto">
          <i className="fa fa-calendar-check  text-white min-w-[50px] text-center p-2.5 bg-blue-500" />
          <input
            className="w-full p-2.5 border focus:bg-blue-100"
            type="date"
            placeholder="due-date"
            name="dueDate"
            value={input.dueDate}
            onChange={hdlChangeInput}
          />
        </div>
        <button
          type="submit"
          className="block mx-auto bg-blue-500 text-white cursor-pointer w-2/3 opacity-90 px-5 py-4 my-5 border-none hover:opacity-100"
        >
          Add this job
        </button>
      </form>
    </div>
  )
}
