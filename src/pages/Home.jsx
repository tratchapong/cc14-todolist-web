import { useEffect, useState } from "react";
import JobItem from "../components/JobItem";
import SummaryCard from "../components/SummaryCard";
import {getJobs, getSummary} from '../api/todoApi'

function Home() {
  const [jobs, setJobs] = useState([])
  const [summary, setSummary] = useState({})
  const [reload, setReload] = useState(false)

  useEffect( ()=>{
    let token = localStorage.getItem('token')
    getJobs(token).then(rs => {
      // console.log(rs.data)
      setJobs(rs.data)
    })
    getSummary(token).then(rs=> {
      setSummary(rs.data)
    })
  }, [reload])

  return (
    <>
      <div className="flex flex-wrap mt-0 p-9 justify-around">
        <SummaryCard title="All Jobs" amount={summary.all} />
        <SummaryCard title="On-going" amount={summary.unDone} />
        <SummaryCard title="Completed" amount={summary.done} />
      </div>
      <div className="flex flex-col items-center w-2/3 mx-auto">
      { 
        jobs.length > 0 
        ?
        jobs.map(el => (
          <JobItem key={el.id} job={el} setReload={setReload} />
        ))
        :
        <p>No Jobs</p>
      }
        
      </div>
    </>
  );
}

export default Home;
