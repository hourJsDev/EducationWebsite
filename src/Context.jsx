import React, { createContext, useContext, useState } from 'react'
import Course from './Data/course'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)
const Context = ({children}) => {
    const [course,setCourse] = useState(Course)
    const [filter,setFilter] = useState("all")
  return (
   <GlobalContext.Provider value={{course,setCourse,Course,filter,setFilter}}>
    {children}
   </GlobalContext.Provider>   
  )
}

export default Context
