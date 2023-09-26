import React, { createContext, useContext, useRef, useState } from 'react'
import Course from './Data/course'
import Mentor from './Data/mentor'
const GlobalContext = createContext()
export const useGlobalContext = () => useContext(GlobalContext)
const Context = ({children}) => {
    const [course,setCourse] = useState(Course)
    const [filter,setFilter] = useState("all")
    const [mentor,setMentor] = useState(Mentor)
    const mentorListRef = useRef(null)
    const [toggle,setToggle] = useState(false)
  return (
   <GlobalContext.Provider value={{course,setCourse,Course,filter,setFilter,mentor,toggle,setToggle,setMentor,mentorListRef}}>
    {children}
   </GlobalContext.Provider>   
  )
}

export default Context
