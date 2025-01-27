import SearchBar from "../../components/SearchBar/SearchBar";
import companyPic from "../../assets/company_default.png";
import { useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Jobs = () => {

  const navigate = useNavigate();
  const [showFilter,setShowFilter] = useState(false);

  const handleShowJobDesc = () => {
      navigate("/Job/abc");
  }

  const handleShowFilter = () => {
      setShowFilter(true);
  }

  const handleHideFilter = () => {
      setShowFilter(false);
  }


    return (
      <>
        <div className="flex justify-center items-center pb-6">
          <SearchBar></SearchBar>
        </div>

        <div className="bg-faintGray flex justify-center items-center w-full px-4 lg:px-56">
          {/* Parent Div For filter and jobs list */}
          <div className="py-20 flex flex-col lg:flex-row gap-3 w-full">
            {/* Filter Section */}
            <div
              className={`${
                showFilter ? "h-fit" : "h-14"
              } overflow-hidden md:overflow-clip md:h-fit p-4 bg-white rounded-2xl border border-slate-200 shadow-lg transition-all duration-500`}
            >
              <h1 className="text-xl font-semibold mb-5 flex justify-between">
                Filters
                {showFilter ? (
                  <IoIosArrowUp
                    className="self-end md:hidden pb-2 text-3xl"
                    onClick={handleHideFilter}
                  />
                ) : (
                  <IoIosArrowDown
                    className="self-end md:hidden pb-2 text-3xl"
                    onClick={handleShowFilter}
                  />
                )}
              </h1>
              <form action="" className="space-y-4">
                {/* Filter by salary */}
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">Salary</h1>
                  <p className="text-sm opacity-80">Minumum monthly salary</p>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="w-full lg:w-auto outline-none border border-slate-300 rounded-md leading-7 text-center"
                  />
                  <hr />
                </div>

                {/* Filter by work type */}
                <div className="space-y-1">
                  <h1 className="text-lg font-semibold">Work Type</h1>
                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      name="work_type"
                      id="work_type"
                      className="cursor-pointer"
                    />
                    <label htmlFor="work_type" className="cursor-pointer">
                      Full time
                    </label>
                  </div>

                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      name="work_type"
                      id="work_type"
                      className="cursor-pointer"
                    />
                    <label htmlFor="work_type" className="cursor-pointer">
                      Part time
                    </label>
                  </div>

                  <div className="space-x-2">
                    <input
                      type="checkbox"
                      name="work_type"
                      id="work_type"
                      className="cursor-pointer"
                    />
                    <label htmlFor="work_type" className="cursor-pointer">
                      Internship
                    </label>
                  </div>
                  <hr />
                </div>

                {/* Sort Filters */}
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold">Sort By</h1>

                  <div className="space-x-2">
                    <input
                      type="radio"
                      name="sort"
                      id="1"
                      className="cursor-pointer"
                    />
                    <label htmlFor="1" className="cursor-pointer">
                      Salary - High to Low
                    </label>
                  </div>
                  <div className="space-x-2">
                    <input
                      type="radio"
                      name="sort"
                      id="2"
                      className="cursor-pointer"
                    />
                    <label htmlFor="2" className="cursor-pointer">
                      Salary - Low to High
                    </label>
                  </div>
                </div>

                <input
                  type="submit"
                  value="APPLY FILTER"
                  className="bg-faintGreen text-white w-full p-2 rounded-xl cursor-pointer font-bold"
                  onClick={handleHideFilter}
                />
              </form>
            </div>

            {/* Jobs Section */}
            <div className="w-full space-y-3">
              <div
                className="px-2 py-7 bg-white rounded-2xl space-y-3 w-full min-w-fit overflow-hidden cursor-pointer shadow-2xl border border-slate-200 pl-8"
                onClick={handleShowJobDesc}
              >
                <div className="flex gap-3 items-center">
                  <img src={companyPic} alt="" className="w-12 md:w-14 rounded-md" />
                  <div>
                    <div className="text-lg font-semibold">
                      Field Sales Executive
                    </div>
                    <div className="text-sm opacity-60">Meezan Enterprises</div>
                  </div>
                </div>

                <div className="pl-6">
                  <div className="opacity-60 flex items-center gap-2">
                    <IoLocationSharp className="opacity-80" />
                    Pune
                  </div>
                  <div className="opacity-60 flex items-center gap-2">
                    <GiMoneyStack className="opacity-90" />
                    $1500 - $30000 monthly
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="bg-[#76767846] rounded-md px-2 py-1 text-xs opacity-65">
                    Full Time
                  </div>
                  <div className="bg-[#76767846] rounded-md px-2 py-1 text-xs opacity-65">
                    Min. 2 years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Jobs;