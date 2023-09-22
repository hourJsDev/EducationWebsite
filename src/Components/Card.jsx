import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import { useGlobalContext } from "../Context";
const Card = (props) => {
  const { image, id, video, name, price, duration, filter } = props;
  return (
    <article className="flex flex-col hover:scale-105 hover:bg-white duration-200 transition-all ease-out">
      <div className="w-[35rem] relative rounded-tl-lg rounded-tr-lg overflow-hidden h-[20rem]">
        <img className="w-full h-full object-cover" src={image} alt={name} />
        <h2 className="absolute text-white top-[1rem] capitalize left-[1rem]">
          {name}
        </h2>
      </div>
      <div className="grid grid-cols-2 py-[1.5rem] px-[2rem] gap-[1rem]">
        <div className="flex items-center gap-[.8rem]">
          <span className="bg-sky-300 w-[2.5rem] h-[2.5rem] text-[1.2rem] text-sky-900 flex items-center justify-center rounded-full">
            <BsCameraVideo />
          </span>
          <span className="text-[1.1rem]">{video} live videos</span>
        </div>
        <div className="flex items-center gap-[.8rem]">
          <span className="bg-sky-300 w-[2.5rem] h-[2.5rem] text-[1.2rem] text-sky-900 flex items-center justify-center rounded-full">
            <BsCameraVideo />
          </span>
          <span className="text-[1.1rem]">Course {price}$</span>
        </div>
        <div className="flex items-center gap-[.8rem]">
          <span className="bg-sky-300 w-[2.5rem] h-[2.5rem] text-[1.2rem] text-sky-900 flex items-center justify-center rounded-full">
            <BsCameraVideo />
          </span>
          <span className="text-[1.1rem]">{duration} Months duration</span>
        </div>
        <div className="flex items-center gap-[.8rem]">
          <button className="border-2 hover:bg-sky-600 hover:text-white rounded-md hover:border-sky-600 duration-200 w-full h-[3rem]">Enroll now</button>
        </div>
      </div>
    </article>
  );
};

export default Card;
