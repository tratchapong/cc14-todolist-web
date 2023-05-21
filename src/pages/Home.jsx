import { useEffect, useState } from "react";
import JobItem from "../components/JobItem";
import SummaryCard from "../components/SummaryCard";
import {getJobs} from '../api/todoApi'

function Home() {
  const [jobs, setJobs] = useState([])

  useEffect( ()=>{
    let token = localStorage.getItem('token')
      getJobs(token).then(rs => {
      console.log(rs.data)
      setJobs(rs.data)
    })
  }, [])

  return (
    <>
      <div className="flex flex-wrap mt-0 p-9 justify-around">
        <SummaryCard title="All Jobs" amount="10" />
        <SummaryCard title="On-going" amount="5" />
        <SummaryCard title="Completed" amount="5" />
      </div>
      <div className="flex flex-col items-center w-2/3 mx-auto">
      { jobs.map(el => (
          <JobItem key={el.id} job={el} />
        ))
      }
        
      </div>
    </>
  );
}

export default Home;
