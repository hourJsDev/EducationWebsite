import React from 'react'
import { Category, CourseList } from '../Components'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <section className='flex flex-col items-center gap-[3rem]'>
        <h1 className='animationTop max-md:text-[2.5rem] max-md:mt-[2rem] text-center text-sky-950 text-[3rem]'>Enroll your favorite courses</h1>
        <Category/>
        <CourseList/>
    </section>
  )
}

export default Courses
