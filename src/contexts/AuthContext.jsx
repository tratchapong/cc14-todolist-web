/* eslint-disable react/prop-types */
import {createContext, useState, useEffect} from 'react'
import {getMe} from '../api/todoApi'

const AuthContext = createContext()

function AuthContextProvider({children}) {
  const [user, setUser] = useState(null)

  useEffect( ()=> {
    let token = localStorage.getItem('token')
    if(token) {
      getMe(token).then( rs => {
          setUser(rs.data)
        })
    }
  },[])

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{user, setUser, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthContextProvider