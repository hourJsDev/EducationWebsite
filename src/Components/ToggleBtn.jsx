import { RiBarChartHorizontalLine } from "react-icons/ri";
import {TfiClose, TfiGallery} from 'react-icons/tfi'
import { useGlobalContext } from "../Context";
const ToggleBtn = () => {
  const { toggle, setToggle } = useGlobalContext();
  if (toggle)
    return (
      <button
        onClick={() => setToggle(!toggle)}
        className="hidden text-[2rem] duration-200 transition-all ease-out active:scale-75 max-md:block"
      >
        <TfiClose />
      </button>
    );

  return (
    <button
      onClick={() => setToggle(!toggle)}
      className="hidden text-[2rem] duration-200 transition-all ease-out active:scale-75 max-md:block"
    >
      <RiBarChartHorizontalLine />
    </button>
  );
};

export default ToggleBtn;
