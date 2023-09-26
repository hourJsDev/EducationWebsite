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
    <div className='flex gap-[.7rem] max-md:right-[4rem] mt-[2rem] absolute right-[8rem]'>
        <span onClick={scrollLeft} className='animationLeft text-[2rem] cursor-pointer duration-200 transition-all ease-out active:scale-90 hover:text-sky-600'><LuChevronLeftCircle/></span>
        <span onClick={scrollRight} className='animationRight text-[2rem] cursor-pointer duration-200 transition-all ease-out active:scale-90 hover:text-sky-600'><LuChevronRightCircle/></span>
    </div>
  )
}

export default ScrollBtn
