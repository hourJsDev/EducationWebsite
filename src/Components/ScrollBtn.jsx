import React from 'react'
import {LuChevronLeftCircle,LuChevronRightCircle} from 'react-icons/lu'
import { useGlobalContext } from '../Context'
const ScrollBtn = () => {
    const {mentorListRef} = useGlobalContext()
    function scrollLeft() {
        mentorListRef.current.scrollLeft -= 300
    }
    function scrollRight() {
        mentorListRef.current.scrollLeft += 300
    }
  return (
    <div className='flex gap-[.7rem] absolute right-[8rem]'>
        <span onClick={scrollLeft} className='text-[2rem] cursor-pointer duration-200 transition-all ease-out active:scale-90 hover:text-sky-600'><LuChevronLeftCircle/></span>
        <span onClick={scrollRight} className='text-[2rem] cursor-pointer duration-200 transition-all ease-out active:scale-90 hover:text-sky-600'><LuChevronRightCircle/></span>
    </div>
  )
}

export default ScrollBtn
