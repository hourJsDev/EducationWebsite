import React from "react";
import Image from "../assets/student.jpg";
import { RootSearchBtn } from "../Components";
const Home = () => {
  return (
    <section className="flex gap-[2rem] max-md:flex-col max-md:items-center justify-center max-md:py-[1rem] px-[7%] py-[4rem]">
      <div className="w-[50%] max-md:w-full max-md:text-center max-md:items-center flex flex-col gap-[1rem]">
        <h1 className="animationLeft max-md:text-[4rem]  text-[7rem] ">Education is create better future</h1>
        <p className="text-[1.2rem] animationLeft ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
          recusandae ipsa ducimus enim <br /> provident non corrupti similique aliquam
          iure facilis!
        </p>
        <RootSearchBtn/>
      </div>
      <div className="animationRight w-[50%] max-md:w-full rounded-md  after:w-[20rem]  overflow-hidden relative ">
        <img src={Image} alt="Student" />
      </div>
    </section>
  );
};

export default Home;
