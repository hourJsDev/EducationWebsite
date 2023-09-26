import { NavLink } from "react-router-dom";
const Navlink = () => {
  return (
    <ul className="link max-md:hidden flex items-center gap-[2rem] -ml-[50rem]">
      <li className="text-[1.4rem] after:absolute relative after:left-0 after:top-[2rem] after:duration-200 after:transition-all hover:after:w-full after:bg-sky-500 after:w-0 after:h-[3px]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-[1.4rem] after:absolute relative after:left-0 after:top-[2rem] after:duration-200 after:transition-all hover:after:w-full after:bg-sky-500 after:w-0 after:h-[3px]">
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li className="text-[1.4rem] after:absolute relative after:left-0 after:top-[2rem] after:duration-200 after:transition-all hover:after:w-full after:bg-sky-500 after:w-0 after:h-[3px]">
        <NavLink to="/mentors">Mentors</NavLink>
      </li>
      {/* <li className="text-[1.4rem] after:absolute relative after:left-0 after:top-[2rem] after:duration-200 after:transition-all hover:after:w-full after:bg-sky-500 after:w-0 after:h-[3px]">
        <NavLink to="/home">Community</NavLink>
      </li> */}
    </ul>
  );
};

export default Navlink;
