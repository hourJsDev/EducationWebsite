import { NavLink } from "react-router-dom";
import Login from "./Login";
import ToggleBtn from "./ToggleBtn";
import { useGlobalContext } from "../Context";
const DropNavbar = () => {
  const { setToggle, toggle } = useGlobalContext();

  return (
    <div className="dropNav w-full h-full fixed top-0 flex  items-center justify-center bg-white z-[1000]">
      <ul className="link flex flex-col items-center gap-[2rem] ">
        <li
          onClick={() => setToggle(!toggle)}
          className="text-[4rem] after:absolute relative after:left-0 after:top-[5rem] after:duration-200 after:transition-all hover:after:w-full after:top-[100%] after:bg-gray-950 after:w-0 after:h-[3px]"
        >
          <NavLink to="/">Home</NavLink>
        </li>
        <li
          onClick={() => setToggle(!toggle)}
          className="text-[4rem] after:absolute relative after:left-0 after:top-[5rem]after:duration-200 after:transition-all hover:after:w-full after:top-[100%] after:bg-gray-950 after:w-0 after:h-[3px]"
        >
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li
          onClick={() => setToggle(!toggle)}
          className="text-[4rem] after:absolute relative after:left-0 after:top-[5rem]after:duration-200 after:transition-all hover:after:w-full after:top-[100%] after:bg-gray-950 after:w-0 after:h-[3px]"
        >
          <NavLink to="/mentors">Mentors</NavLink>
        </li>
        {/* <li
          onClick={() => setToggle(!toggle)}
          className="text-[4rem] after:absolute relative after:left-0 after:top-[5rem]after:duration-200 after:transition-all hover:after:w-full after:top-[100%] after:bg-gray-950 after:w-0 after:h-[3px]"
        >
          <NavLink to="/home">Community</NavLink>
        </li> */}
        <div className="scale-125 mt-[2rem]">
          <Login />
        </div>
        <div className="absolute top-[3rem] right-[2.2rem]">
          <ToggleBtn />
        </div>
      </ul>
    </div>
  );
};

export default DropNavbar;
