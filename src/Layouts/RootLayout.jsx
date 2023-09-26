import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Scroll from "../Scroll";
import DropNavbar from "../Components/DropNavbar";
import { useGlobalContext } from "../Context";

const RootLayout = () => {
  const {toggle} = useGlobalContext()
  return (
    <div>
      <Scroll/>
      {toggle && <DropNavbar/>}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
