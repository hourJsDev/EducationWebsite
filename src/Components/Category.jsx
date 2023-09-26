import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Category = () => {
  const {setFilter} = useGlobalContext()
  return (
    <nav className="flex max-md:gap-[.7rem] gap-[2rem]">
      <button onClick={()=> setFilter("all")} className="animationLeft max-md:text-[1rem] border border-sky-300 active:scale-90 duration-200 transition-all ease-out hover:text-white hover:bg-sky-600 rounded-md text-[1.2rem] py-[.5rem] px-[1rem]">All Category</button>
      <button onClick={()=> setFilter("web development")} className="animationLeft max-md:text-[1rem] border border-sky-300 active:scale-90 duration-200 transition-all ease-out hover:text-white hover:bg-sky-600 rounded-md text-[1.2rem] py-[.5rem] px-[1rem]">Web Development</button>
      <button onClick={()=> setFilter("app development")} className="animationRight max-md:text-[1rem] border border-sky-300 active:scale-90 duration-200 transition-all ease-out hover:text-white hover:bg-sky-600 rounded-md text-[1.2rem] py-[.5rem] px-[1rem]">App Development</button>
      <button onClick={()=> setFilter("design")} className="animationRight max-md:text-[1rem] border border-sky-300 active:scale-90 duration-200 transition-all ease-out hover:text-white hover:bg-sky-600 rounded-md text-[1.2rem] py-[.5rem] px-[1rem]">Design</button>
    </nav>
  );
};

export default Category;
