import React from "react";

const RootSearchBtrn = () => {
  return (
    <div className="animation1 flex mt-[2rem]">
      <input
        className="border placeholder:text-gray-700 rounded-sm border-sky-300 valid:border-sky-600 outline-none focus:border-sky-600 p-[.8rem] w-[20rem] h-[2.8rem]"
        required
        placeholder="Enter email"
        type="email"
      />
      <button className=" h-[2.8rem] flex items-center rounded-sm w-[6rem] justify-center text-white bg-sky-600">Free Trail</button>
    </div>
  );
};

export default RootSearchBtrn;
