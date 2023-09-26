import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Scroll from "../Scroll";

const RootLayout = () => {
  return (
    <div>
      <Scroll/>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
