/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


export default function JobItem(props) {
  const {job } = props
  return (
    <div className="collapse w-full rounded gap-1">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-pink-300 peer-checked:bg-pink-400">{job.title}</div>
      <div className="collapse-content peer-checked:bg-violet-400 mb-2">
        <div className="flex justify-around mt-3">
          <p>Remain Day : {job.remainDay}</p>
          <p>Due Date : {job.dueDate}</p>
          <p>Status : {job.status? 'Done' : 'Undone'}</p>
        </div>
      </div>
    </div>
  );
}
