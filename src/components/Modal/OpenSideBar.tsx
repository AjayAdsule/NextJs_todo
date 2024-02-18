import { Dispatch, SetStateAction } from "react";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

interface AppProps {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<SetStateAction<boolean>>;
}
const OpenSideBar: React.FC<AppProps> = ({
  isSideBarOpen,
  setIsSideBarOpen,
}) => {
  return (
    <button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
      {isSideBarOpen ? (
        <CiSquareChevRight size={26} />
      ) : (
        <CiSquareChevLeft size={26} />
      )}
    </button>
  );
};

export default OpenSideBar;
