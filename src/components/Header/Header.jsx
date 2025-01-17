import logo from "../../assets/logo.webp";
import { PiListBold } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiBagSimple } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";




const Header = () => {

  const [showSideBar,setShowSideBar] = useState(false);

  const handleShowOptClick = () => {
    setShowSideBar(true);
  };

  const handleCloseOptClick = () => {
    setShowSideBar(false);
  }

  return (
    <>
      <nav className="sticky top-0 left-0 right-0 lg:px-32 py-1 px-5 pt-4 md:pt-0 w-full flex items-center justify-between bg-faintGray z-50">
        {/* left section of header */}
        <div className="flex justify-between w-26 items-center">
          <PiListBold
            className="text-2xl mr-2  md:hidden"
            onClick={handleShowOptClick}
          />
          {/* for logo */}
          <Link to="/">
            <div className="w-10 mr-0 md:mr-14 md:w-16 rounded-lg md:rounded-2xl overflow-hidden">
              <img src={logo} alt="hello world" className="w-full " />
            </div>
          </Link>
          {/* ul for options */}
          <ul className="hidden md:flex space-x-8 text-slate-900 text-base leading-10 py-5 font-semibold  ">
            <li>
              <Link to="/Jobs" className="cursor-pointer">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer">Companies</Link>
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

      {/* This section is for small screens only visible when three lines are clicked*/}
      <nav
        className={`w-full h-full fixed z-50 top-0 bottom-0 duration-700 ${
          showSideBar ? "left-0" : "left-[-110%]"
        } md:hidden flex gap-20`}
      >
        <div className="h-full w-full bg-white py-9 rounded-r-3xl space-y-4 z-50">
          <Link to="/" onClick={handleCloseOptClick}>
            <div className="overflow-hidden pl-6">
              <img src={logo} alt="" className="w-14 rounded-2xl" />
            </div>
          </Link>

          {/* Options list */}
          <div>
            <ul className="space-y-1 text-slate-900 text-base leading-10 py-5 font-semibold  ">
              <li onClick={handleCloseOptClick}>
                <Link to="/Jobs" className="flex gap-3 items-center pl-6">
                  <HiOutlineBuildingOffice2 className="text-xl" />
                  Jobs
                </Link>
              </li>
              <li onClick={handleCloseOptClick}>
                <Link className="flex gap-3 items-center pl-6">
                  <PiBagSimple className="text-xl" />
                  Companies
                </Link>
              </li>
            </ul>
            <div className="border-b border-b-black border-opacity-20"></div>
            <div className="flex gap-3 items-center pl-6 pt-5">
              <CiLogout className="text-xl text-red-700" /> Logout
            </div>
          </div>
        </div>
        <div className="bg-white h-fit w-fit mt-10 mr-8 p-2 rounded-full">
          {showSideBar && <RxCross1 onClick={handleCloseOptClick} />}
        </div>
      </nav>
    </>
  );
};

export default Header;
