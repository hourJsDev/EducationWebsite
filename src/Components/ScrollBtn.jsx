import React from 'react'
import {LuChevronLeftCircle,LuChevronRightCircle} from 'react-icons/lu'
import { useGlobalContext } from '../Context'
const ScrollBtn = () => {
    const {mentorListRef} = useGlobalContext()
    function scrollLeft() {
        console.log(mentorListRef);
    }
  return (
    <div className='flex gap-[.7rem] absolute right-[8rem]'>
        <span onClick={scrollLeft} className='text-[2rem] cursor-pointer duration-200 transition-all ease-out active:scale-90 hover:text-sky-600'><LuChevronLeftCircle/></span>
        <span className='text-[2rem] cursor-pointer duration-200 transition-all ease-out active:scale-90 hover:text-sky-600'><LuChevronRightCircle/></span>
    </div>
  )
}

export default ScrollBtn
