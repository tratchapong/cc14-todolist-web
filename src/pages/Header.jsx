/* eslint-disable no-unused-vars */
import Navbar from '../components/Navbar'
import UserMenu from '../components/UserMenu';

export default function Header() {
  

  return (
    <div className="flex justify-end items-end w-full p-2 pe-5 bg-lime-400 h-[80px] gap-5">
      <UserMenu />    
      {/* <Navbar /> */}

    </div>
  );
}
