/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {createContext, useState, useEffect} from 'react'
import {getMe} from '../api/todoApi'

const AuthContext = createContext()

function AuthContextProvider({children}) {
  const [user, setUser] = useState(null)
  const [reload, setReload] = useState(false)

  useEffect( ()=> {
    console.log('AuthContext useEffect run')
    console.log(user)
    let token = localStorage.getItem('token')
    if(token) {
      getMe(token).then( rs => {
          setUser(rs.data)
        })
    }
  },[reload])

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{user, setUser, logout, setReload}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
export default AuthContextProvider