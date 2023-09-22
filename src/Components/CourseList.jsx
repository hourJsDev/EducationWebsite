import React, { useEffect, useState } from "react";
import {useGlobalContext} from '../Context'
import Card from "./Card";
const CourseList = () => {
    const {course,filter,setCourse,Course} = useGlobalContext()
  useEffect(()=>{
    if(filter=="all"){
        setCourse(Course)
    }else{
        const getFilter = Course.filter(c=> c.name===filter)
        setCourse(getFilter)
    }
  },[filter])
  return (
    <div className="flex justify-center gap-[2rem] flex-wrap">
      {course.map((data) => (
        <Card {...data}  key={data.id}  />
      ))}
    </div>
  );
};

export default CourseList;
