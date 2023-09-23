import React from 'react'
import { MentorList, ScrollBtn } from '../Components'

const Mentors = () => {
  return (
   <section className='relative'>
    <h1 className='text-center text-[3.5rem]'>Our professional & <br />
    experience mentors</h1>
    <ScrollBtn/>
    <MentorList/>
   </section>
  )
}

export default Mentors
