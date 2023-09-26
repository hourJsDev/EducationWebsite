import React from "react";
import { MentorList, ScrollBtn } from "../Components";
import { Link } from "react-router-dom";

const Mentors = () => {
  return (
    <section className="relative">
      <h1 className="animationTop max-[600px]:text-[2rem] text-sky-950 text-center text-[3.5rem]">
        Our professional & <br />
        experience mentors
      </h1>
      <ScrollBtn />
      <MentorList />

    </section>
  );
};

export default Mentors;
