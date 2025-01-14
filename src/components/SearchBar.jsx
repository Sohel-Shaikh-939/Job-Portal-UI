import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const SearchBar = () => {
      const [showResponsiveSearch, setResponsiveSearch] = useState(false);

    const handleHiddenSearchBar = () => {
        setResponsiveSearch(true);
    }
    
  return (
    <>
      <form action="" className="mt-7 z-50">
        <div className="hidden md:flex md:flex-col lg:flex-row py-4 bg-white w-fit px-5 rounded-xl text-lg md:items-center z-50 md:w-96 lg:w-fit md:space-y-3 lg:space-y-0 align-middle">
          <div className="flex items-center gap-2">
            <IoIosSearch className="opacity-65" />
            <input
              type="text"
              name=""
              placeholder="Search jobs by 'title' "
              className="outline-none md:leading-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="align-self-start h-11 border-l-2 border-black opacity-20 md:hidden lg:block"></div>
            <IoBagOutline className="opacity-65" />
            <input
              type="text"
              name=""
              placeholder="Your Experience"
              className="outline-none md:leading-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="align-self-start h-11 border-l-2 border-black opacity-20  md:hidden lg:block"></div>
            <CiLocationOn />
            <input
              type="text"
              name=""
              className="outline-none md:leading-10"
              placeholder="Search by area"
            />
          </div>
          <input
            type="submit"
            value="Search jobs"
            className="text-white py-2 px-8
                 bg-faintGreen  rounded ml-4 text-md font-semibold "
          />
        </div>

        {/* This searchbar is only for click, after click original searchbar will be visible */}
        {!showResponsiveSearch && (
          <div className="md:hidden w-full h-14 px-4 flex bg-white justify-center overflow-hidden rounded-lg transition-all ">
            <div className="content-center">
              <IoIosSearch className="opacity-65 text-2xl " />
            </div>
            <input
              type="text"
              placeholder="Search jobs by 'text'"
              className="w-full  outline-none"
              onClick={handleHiddenSearchBar}
              readOnly
            />
          </div>
        )}

        {/* This is the part which will be used in small screen sizes */}
        {showResponsiveSearch && (
          <div className="max-w-96 flex flex-col py-4 bg-white px-5 rounded-xl text-lg z-50 align-middle space-y-5 transition-all">
            <div className="flex items-center gap-2">
              <IoIosSearch className="opacity-65" />
              <input
                type="text"
                name=""
                placeholder="Search jobs by 'title' "
                className="outline-none md:leading-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <IoBagOutline className="opacity-65" />
              <input
                type="text"
                name=""
                placeholder="Your Experience"
                className="outline-none md:leading-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <input
                type="text"
                name=""
                className="outline-none md:leading-10"
                placeholder="Search by area"
              />
            </div>
            <input
              type="submit"
              value="Search jobs"
              className="text-white py-2 px-8
                 bg-faintGreen  rounded  text-md font-semibold "
            />
          </div>
        )}
      </form>
    </>
  );
};

export default SearchBar;