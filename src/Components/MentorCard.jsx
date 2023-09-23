import React from "react";

const MentorCard = (props) => {
  const { image, id, name, skill, experience } = props;
  return (
    <article className="animation1">
      <div className="mentorCard w-[15rem] overflow-hidden rounded-md transition-all duration-200 ease-out h-[35rem] hover:w-[25rem] relative">
        <h3 className="mentorName z-30 absolute top-[.5rem] py-[.2rem] left-[1rem] opacity-0 capitalize rounded-md bg-white px-[1rem] text-[1rem]">{skill}</h3>
        <img
          className="w-full h-full object-cover  transition-all duration-200 ease-out "
          src={image}
          alt={name}
        />
        <div className="absolute flex w-full p-[1rem] justify-between bottom-0 ">
          <h3 className="text-white text-[1.1rem]">{name}</h3>
          <h3 className="text-white text-[1.1rem] text-center">
            {experience} years <br />
            Experience
          </h3>
        </div>
      </div>
    </article>
  );
};

export default MentorCard;
