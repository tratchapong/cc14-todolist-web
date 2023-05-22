/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import { deleteTodo } from '../api/todoApi'

export default function JobItem(props) {
  const {job, setReload } = props


  let cssJobTitle = job.status ? 
    "collapse-title bg-lime-300 peer-checked:bg-lime-400" 
    : "collapse-title bg-pink-300 peer-checked:bg-pink-400"

  const hdlDelete = () => {
    let token = localStorage.getItem('token')
    if(!confirm(`Delete Job : ${job.title}`))
      return;
    deleteTodo(job.id, token).then( ()=>{
      setReload( prv => !prv)
    }).catch( err => console.log(err))
  }

  return (
    <div className="collapse w-full rounded ">
      <input type="checkbox" className="peer" />
      <div className={cssJobTitle}>{job.title}</div>
      <div className="collapse-content peer-checked:bg-violet-400 mb-2">
        <div className="flex justify-around items-center mt-3 ">
          <p>Remain Day : {job.remainDay}</p>
          <p>Due Date : {job.dueDate}</p>
          <p>Status : {job.status? 'Done' : 'Undone'}</p>
          <Link className='btn btn-circle' to={`/updatetodo/${job.id}`}>Edit</Link>
          <button className='btn btn-circle btn-error' onClick={hdlDelete}> Delete</button>
        </div>
      </div>
    </div>
  );
}
