import logo from "../assets/logo.webp";
import { PiListBold } from "react-icons/pi";

const Header = () => {
  return (
    <>
      <nav className="sticky top-0 left-0 right-0 lg:px-32 py-1 px-5 pt-4 md:pt-0 w-full flex items-center justify-between bg-faintGray z-50">
        {/* left section of header */}
        <div className="flex justify-between w-26 items-center">
          <PiListBold className="text-2xl mr-2  md:hidden"/>
          {/* for logo */}
          <div className="w-10 mr-0 md:mr-14 md:w-16 rounded-lg md:rounded-2xl overflow-hidden">
            <img src={logo} alt="hello world" className="w-full " />
          </div>
          {/* ul for options */}
          <ul className="hidden md:flex space-x-8 text-slate-900 text-base leading-10 py-5 font-semibold  ">
            <li>
              <a>Jobs</a>
            </li>
            <li>
              <a>Companies</a>
            </li>
          </ul>
        </div>

        {/* Right section */}

        <div>
          <button className="text-xs bg-transparent text-green-900 font-semibold md:text-base md:w-20 lg:w-fit leading-10">
            Employer Login
          </button>
          <button className="text-white py-2 px-3 text-xs md:text-base md:w-32 lg:w-fit bg-faintGreen  rounded  font-semibold text-[.95rem] ml-4 hover:text-faintGreen hover:bg-faintGray border-2 border-faintGreen">
            Candidate Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
