/* eslint-disable react/prop-types */
import {createContext, useState, useContext} from 'react'

const AuthContext = createContext()

function AuthContextProvider({children}) {
  const [user, setUser] = useState(null)
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