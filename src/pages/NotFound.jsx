/* eslint-disable no-unused-vars */
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  useEffect( ()=>{
    setTimeout(()=>{
      // navigate('/')
      window.location.replace('/')
    },2000)
  }, [])
  
  return (
    <div>
      <h1 className='text-2xl text-red-500'>Page not found</h1>
    </div>
  )
}
