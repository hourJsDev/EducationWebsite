import React from "react";
import { CiSearch } from "react-icons/ci";
const SerachBtn = () => {
  return (
    <div className="flex items-center gap-[.2rem]">
      <span className="text-[1.5rem]">
        <CiSearch />
      </span>
      <input
        className="placeholder:text-black text-[1.2rem] w-[6rem] p-[.5rem] transition-all duration-200 focus:w-[9rem]"
        placeholder="Search"
        type="text"
      />
    </div>
  );
};

export default SerachBtn;
