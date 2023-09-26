import React from "react";
import Navlink from "./Navlink";
import { Login, SearchBtn, ToggleBtn } from "../Components";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-[5%] py-[1rem] items-center">
      <div className="w-[7rem]">
        <img className="w-full"
          src="https://imgs.search.brave.com/NYCHkpcCM00CeP7zYwlzmMoK9OFfiVXq6LTFocTu1tw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzM4Lzg5LzM2/LzM2MF9GXzEzODg5/MzYzM19uUGFOaTFm/b1FKQjVEWVpjWG03/ZTJnS2FPbm42Y1Rq/Ry5qcGc"
          alt="logo"
        />
      </div>
      <Navlink />
      <div className="flex max-md:hidden gap-[2rem] items-center">
        <SearchBtn />
        <Login />
      </div>
      <ToggleBtn/>
    </nav>
  );
};

export default Navbar;
