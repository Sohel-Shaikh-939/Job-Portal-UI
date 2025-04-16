import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CiBookmark } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { jobSliceAction } from "../Job/jobSlice";


const Company = () => {
  const { company } = useSelector((store) => store.Company);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (!company.compname) {
      navigate("/companies");
    }
  }, []);

  const handleShowJobDesc = (job) => {
      dispatch(jobSliceAction.setJob(job));
      navigate("/Job");
    };

  return (
    <>
      <div className="min-h-[80vh] py-10">
        <div className="pt-5  border border-slate-500 mx-4 md:mx-10 rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:max-w-[70%] md:gap-10 m-auto ">
            <div>
              <div className="w-16 h-16 md:w-36 md:h-36 overflow-hidden rounded-md">
                <img
                  src={`http://localhost:8080${company.compimg}`}
                  alt=""
                  className="h-full w-full"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 py-5">
              <div className="flex gap-3">
                <div className="md:text-2xl font-semibold">Company Name :</div>{" "}
                <div className="md:text-2xl font-semibold">
                  {company.compname}
                </div>
              </div>
              <div className="flex gap-3">
                <div className="md:text-2xl font-semibold">
                  Recruiter Name :
                </div>{" "}
                <div className="md:text-2xl font-semibold">
                  {company.empname}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5 mt-10 bg-faintGray py-8">
            <div className="flex md:max-w-[70%] m-auto gap-3 px-3 lg:px-0">
              <div className="md:text-2xl text-lg font-bold ">
                Jobs offered by
              </div>
              <div className="md:text-2xl text-lg font-bold opacity-65">
                {company.compname}
              </div>
            </div>
            <div className=" relative md:max-w-[70%] grid grid-cols-1 lg:grid-cols-2 gap-4 m-auto px-3 lg:px-0">
              {company.compname ? company.postedjobs.map((job, ind) => (
                <div className="relative" key={ind}>
                  <div
                    className="px-2 py-7 bg-white rounded-2xl space-y-3 w-full min-w-fit overflow-hidden cursor-pointer shadow-2xl border border-slate-200 pl-8 "
                    onClick={() => {
                      handleShowJobDesc(job);
                    }}
                    key={ind}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden">
                        <img
                          src={`http://localhost:8080${job.compimg}`}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          {job.jtitle}
                        </div>
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
                  <div
                    className="absolute top-5 right-5 p-2 bg-slate-100 rounded-full cursor-pointer hover:scale-110 transition"
                    onClick={() => {
                      handleBookMark(job.id);
                    }}
                  >
                    <CiBookmark className="text-2xl" />
                  </div>
                </div>
              )) : ""}
              {/* <div>
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
