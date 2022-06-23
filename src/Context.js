import React, { createContext,useState } from 'react'
export const State=createContext()
const Context = ({children}) => {
    const [categorySelected, setCategorySelected] = useState("general")

  return (
    <State.Provider value={{categorySelected, setCategorySelected}}>
        {children}
    </State.Provider>
  )
}

export default Context