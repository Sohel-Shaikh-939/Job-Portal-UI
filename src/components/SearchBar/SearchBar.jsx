import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchBarSliceAction } from "./searchBarSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showResponsiveSearch, setResponsiveSearch] = useState(false);
  const {inComponent} = useSelector(store => store.SearchBar);

  const handleHiddenSearchBar = () => {
    setResponsiveSearch(true);
  };

  const handleSearchClicked = async (e) => {
    e.preventDefault();
    console.log(e.target.title.value, e.target.experience.value,e.target.location.value);
    dispatch(
      searchBarSliceAction.setSearch({
        title: e.target.title.value,
        experience: e.target.experience.value,
        location: e.target.location.value,
      })
    );
    
    if (inComponent === "home") {
      navigate("/Jobs");
    }
  };

  return (
    <>
      <form className="mt-7 z-40" onSubmit={handleSearchClicked}>
        <div className="hidden md:flex md:flex-col lg:flex-row py-4 bg-white w-fit px-5 rounded-xl text-lg md:items-center z-50 md:w-96 lg:w-fit md:space-y-3 lg:space-y-0 align-middle border border-slate-200">
          <div className="flex items-center gap-2">
            <IoIosSearch className="opacity-65" />
            <input
              type="text"
              name="title"
              placeholder="Search jobs by 'title' "
              className="outline-none md:leading-10"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="align-self-start h-11 border-l-2 border-black opacity-20 md:hidden lg:block"></div>
            <IoBagOutline className="opacity-65" />
            <input
              type="text"
              name="experience"
              placeholder="Your Experience"
              className="outline-none md:leading-10"
              required
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="align-self-start h-11 border-l-2 border-black opacity-20  md:hidden lg:block"></div>
            <CiLocationOn />
            <input
              type="text"
              name="location"
              className="outline-none md:leading-10"
              placeholder="Search by area"
              required
            />
          </div>
          <input
            type="submit"
            value="Search jobs"
            className="text-white py-2 px-8
                 bg-faintGreen  rounded ml-4 text-md font-semibold "
          />
        </div>
        </form>

        {/* This searchbar is only for click, after click original searchbar will be visible */}
        {!showResponsiveSearch && (
          <div className="md:hidden w-full h-14 px-4 flex bg-white justify-center items-center overflow-hidden rounded-lg transition-all ">
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
          <form className="mt-7 z-40" onSubmit={handleSearchClicked}>
          <div className="max-w-96 flex flex-col py-4 bg-white px-5 rounded-xl text-lg z-50 align-middle space-y-5 transition-all md:hidden">
            <div className="flex items-center gap-2">
              <IoIosSearch className="opacity-65" />
              <input
                type="text"
                name="title"
                placeholder="Search jobs by 'title' "
                className="outline-none md:leading-10"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <IoBagOutline className="opacity-65" />
              <input
                type="text"
                name="experience"
                placeholder="Your Experience"
                className="outline-none md:leading-10"
                required
              />
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <input
                type="text"
                name="location"
                className="outline-none md:leading-10"
                placeholder="Search by area"
                required
              />
            </div>
            <input
              type="submit"
              value="Search jobs"
              className="text-white py-2 px-8
                 bg-faintGreen  rounded  text-md font-semibold "
            />
          </div>
      </form>
        )}
    </>
  );
};

export default SearchBar;
