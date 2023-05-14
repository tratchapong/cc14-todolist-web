import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div className='flex justify-between items-end w-full p-2 bg-lime-400 h-[80px]'>
      <div className='w-16' >
        <img src="https://www.svgrepo.com/show/513347/shop.svg" className='block p-1 ms-2'/>
      </div>
      <nav className="flex gap-4">
        <NavLink className='navlink' to='/'>Home</NavLink>
        <NavLink className='navlink' to='/login'>Login</NavLink>
        <NavLink className='navlink' to='/register'>Register</NavLink>
      </nav>
    </div>
  )
}
