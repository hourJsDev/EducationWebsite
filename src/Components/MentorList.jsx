import { useGlobalContext } from "../Context"
import MentorCard from "./MentorCard"

const MentorList = () => {
    const {mentor,mentorListRef} = useGlobalContext()
  return (
    <div ref={mentorListRef} className="mentorList max-md:mt-[5rem] mt-[3rem] flex w-[80%] mx-auto gap-[1.5rem] overflow-x-scroll">
      {mentor.map(mentor=> <MentorCard key={mentor.id} {...mentor}/>)}
      {mentor.map(mentor=> <MentorCard key={mentor.id} {...mentor}/>)}
      
    </div>
  )
}

export default MentorList
