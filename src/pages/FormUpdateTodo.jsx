/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { getJob, updateTodo } from "../api/todoApi";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function FormUpdateTodo() {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(p)
  const [input, setInput] = useState({
    title: "",
    dueDate: "",
    status: "",
  });

  useEffect(() => {
    let token = localStorage.getItem("token");
    getJob(id, token).then((rs) => {
      // console.log(rs.data);
      setInput(rs.data);
    });
  }, [id]);

  const hdlChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    
  };

  const hdlCheck = e => {
    setInput({...input, status: e.target.checked})
    
  }

  const hdlSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token");
    updateTodo(id, input, token).then((rs) => {
      // console.log(rs)
      navigate("/");
    });
  };

  return (
    <div className="w-full max-w-[800px] mx-auto my-6 p-5 border">
      <form onSubmit={hdlSubmit}>
        <h2 className="w-2/3 mx-auto mb-5 text-xl">Update todo</h2>
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
        <div className="form-control w-40 mx-auto ">
          <label className="cursor-pointer label">
            <span className="label-text">Completed :</span>
            <input type="checkbox" className="toggle toggle-primary" checked={input.status} onChange={hdlCheck}/>
          </label>
        </div>
        <button
          type="submit"
          className="block mx-auto bg-blue-500 text-white cursor-pointer w-2/3 opacity-90 px-5 py-4 my-5 border-none hover:opacity-100"
        >
          Update this job
        </button>
      </form>
      <Link to="/" className="block text-right">
        Cancel
      </Link>
    </div>
  );
}
