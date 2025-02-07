import SearchBar from "../../components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { jobsSliceAction } from "./jobsSlice";
import { jobSliceAction } from "../Job/jobSlice";
import store from "../../store";
import { searchBarSliceAction } from "../../components/SearchBar/searchBarSlice";
import Spinner from "../../components/Spinner/Spinner";

const Jobs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobs } = useSelector((store) => store.Jobs);
  const { title, experience, location } = useSelector(store => store.SearchBar);
  const [showFilter, setShowFilter] = useState(false);
  const [filterApplied, setFilterApplied] = useState(false);
  const [loading, setLoading] = useState(false);
  const initialRender = useRef(true);
  const form = useRef();
  const page = useRef(1);
  const salary = useRef(0);
  const sort = useRef(0);
  const [noMore, setNoMore] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch(searchBarSliceAction.setSearch({inComponent: "jobs"}));
    async function data() {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/getjobs?page=${page.current}${
          salary.current ? `&salary=${salary.current}` : ""
        }${sort.current !== 0 ? `&sort=${sort.current}` : ""}${
          title ? `&title=${title}` : ""
        }${experience ? `&experience=${experience}` : ""}${
          location ? `&location=${location}` : ""
        }`
      );
      if (res.data.status) {
        dispatch(jobsSliceAction.setJobs(res.data.data));
      }
      setLoading(false);
    }
    if (!jobs.length) {
      data();
    }
  }, []);

  useEffect(() => {
    if(initialRender.current){
      initialRender.current = false;
      return;
    }
    setNoMore(false);
    page.current = 0;
    dispatch(jobsSliceAction.setJobsEmpty());
    handleLoadMore();
  },[location,location,title])

  const handleLoadMore = async () => {
    page.current++;
    setLoading(true);
    const res = await axios.get(
      `http://localhost:8080/getjobs?page=${page.current}${
        salary.current ? `&salary=${salary.current}` : ""
      }${sort.current !== 0 ? `&sort=${sort.current}` : ""}${title ? `&title=${title}`: ""}${experience ? `&experience=${experience}`: ""}${location ? `&location=${location}`: ""}`
    );
    if (!res.data.count) {
      setNoMore(true);
    }
    if (res.data.status) {
      dispatch(jobsSliceAction.setJobs(res.data.data));
    }
    setLoading(false);
  };

  const handleFilterApplly = (e) => {
    e.preventDefault();
    setFilterApplied(true);

    salary.current = e.target.minsal.value;
    sort.current = e.target.sort.value;
    page.current = 0;
    dispatch(jobsSliceAction.setJobsEmpty());
    handleLoadMore();
  };

  const handleFilterRemove = () => {
    setNoMore(false);
    setFilterApplied(false);
    salary.current = 0;
    sort.current = null;
    page.current = 0;
    form.current.reset();
    dispatch(jobsSliceAction.setJobsEmpty());
    handleLoadMore();
  };

  const handleShowJobDesc = (job) => {
    dispatch(jobSliceAction.setJob(job));
    navigate("/Job");
  };

  const handleShowFilter = () => {
    setShowFilter(true);
  };

  const handleHideFilter = () => {
    setShowFilter(false);
  };

  return (
    <>
      <div className="flex justify-center items-center pl-10 ">
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
            <form
              className="space-y-4"
              onSubmit={handleFilterApplly}
              ref={form}
            >
              {/* Filter by salary */}
              <div className="space-y-2">
                <h1 className="text-lg font-semibold">Salary</h1>
                <p className="text-sm opacity-80">Minumum monthly salary</p>
                <input
                  type="number"
                  name="minsal"
                  className="w-full lg:w-auto outline-none border border-slate-300 rounded-md leading-7 text-center"
                />
                <hr />
              </div>

              {/* Filter by work type */}
              {/* <div className="space-y-1">
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
                </div> */}

              {/* Sort Filters */}
              <div className="space-y-2">
                <h1 className="text-lg font-semibold">Sort By</h1>

                <div className="space-x-2">
                  <input
                    type="radio"
                    name="sort"
                    value="dsc"
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
                    value="asc"
                    id="2"
                    className="cursor-pointer"
                  />
                  <label htmlFor="2" className="cursor-pointer">
                    Salary - Low to High
                  </label>
                </div>
              </div>

              {filterApplied ? (
                <div
                  className="bg-red-500 text-center text-white w-full p-2 rounded-xl cursor-pointer font-bold"
                  onClick={handleFilterRemove}
                >
                  REMOVE FILTER
                </div>
              ) : (
                <input
                  type="submit"
                  value="APPLY FILTER"
                  className="bg-faintGreen text-white w-full p-2 rounded-xl cursor-pointer font-bold"
                  onClick={handleHideFilter}
                />
              )}
            </form>
          </div>

          {/* Jobs Section */}
          <div className="w-full space-y-3 relative">
            {jobs.map((job, ind) => (
              <div
                className="px-2 py-7 bg-white rounded-2xl space-y-3 w-full min-w-fit overflow-hidden cursor-pointer shadow-2xl border border-slate-200 pl-8"
                onClick={() => {
                  handleShowJobDesc(job);
                }}
                key={ind}
              >
                <div className="flex gap-3 items-center">
                  <img
                    src={`http://localhost:8080${job.compimg}`}
                    alt=""
                    className="w-12 md:w-14 rounded-md"
                  />
                  <div>
                    <div className="text-lg font-semibold">{job.jtitle}</div>
                    <div className="text-sm opacity-60">{job.compname}</div>
                  </div>
                </div>

                <div className="pl-6">
                  <div className="opacity-60 flex items-center gap-2">
                    <IoLocationSharp className="opacity-80" />
                    {job.location}
                  </div>
                  <div className="opacity-60 flex items-center gap-2">
                    <GiMoneyStack className="opacity-90" />${job.minsal} - $
                    {job.maxsal} monthly
                  </div>
                </div>

                <div className="flex gap-2">
                  {job.shift.map((shift, ind) => (
                    <div
                      className="bg-[#76767846] rounded-md px-2 py-1 text-xs opacity-65"
                      key={ind}
                    >
                      {shift}
                    </div>
                  ))}
                  <div className="bg-[#76767846] rounded-md px-2 py-1 text-xs opacity-65">
                    Min. {job.experience}
                  </div>
                </div>
              </div>
            ))}
            <div>
              {noMore ? (
                <div className="py-4 px-7 bg-faintGreen rounded-md hover:scale-105 text-white text-xl font-semibold m-auto w-fit transition-all duration-300">
                  No More Jobs
                </div>
              ) : (
                <div
                  className="py-4 px-7 bg-faintGreen rounded-md hover:scale-105 text-white text-xl font-semibold m-auto w-fit transition-all duration-300 min-w-36 relative min-h-16"
                  onClick={handleLoadMore}
                >
                  {loading ? (
                    <div
                      className={`${
                        loading ? "absolute" : "hidden"
                      } z-50 bg rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0 `}
                    >
                      <Spinner />
                    </div>
                  ) : (
                    "Load More"
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
