import React from 'react'
import { Category, CourseList } from '../Components'

const Courses = () => {
  return (
    <section className='flex flex-col items-center gap-[3rem]'>
        <h1 className='animationTop text-center text-sky-950 text-[3rem]'>Enroll your favorite courses</h1>
        <Category/>
        <CourseList/>
    </section>
  )
}

export default Courses
