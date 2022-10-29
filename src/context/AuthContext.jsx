import React, { useState } from 'react'

export const AuthContext =React.createContext()

export const AuthContextProvider = ({children}) => {
    const [token,setToken]=useState(true)
    
  return (
    <AuthContext.Provider value={[token,setToken]}>
        {children}
    </AuthContext.Provider>
  )
}