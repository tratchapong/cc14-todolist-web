import Navbar from '../components/Navbar'
import AnyUser from "../icons/AnyUser";

import useAuth from "../hooks/useAuth";

export default function Header() {

  const { user } = useAuth();
  const img_url = `http://localhost:8080/pic/${user?.image}?${new Date().getTime()}`
  

  return (
    <div className="flex justify-between items-end w-full p-2 bg-lime-400 h-[80px]">
      <div className="flex-1 flex gap-3 items-center">
        <div className="w-16">
          {
            user?.image ?
              <img src={img_url} className="block p-1 ms-2" />
              :
              <AnyUser />
          }
        </div>
        <p className="text-2xl">{user?.name || "Guest"}</p>

      </div>
      <Navbar />

    </div>
  );
}
