/* eslint-disable react/prop-types */
import {createContext, useState, useContext, useEffect} from 'react'
import axios from 'axios'

const AuthContext = createContext()

function AuthContextProvider({children}) {
  const [user, setUser] = useState(null)

  useEffect( ()=> {
    let token = localStorage.getItem('token')
    if(token) {
      axios.get('http://localhost:8080/auth/getMe', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then( rs => {
        setUser(rs.data)
      })
    
    }
  },[])
  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider