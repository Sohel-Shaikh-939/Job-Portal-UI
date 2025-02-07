import { IoLocationSharp } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi2";
import { IoPerson } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { homeSliceAction } from "../Home/homeSlice";

const Job = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showWarn,setShowWarn] = useState(false);
  const {job} = useSelector(store => store.Job);
  const {loginInfo} = useSelector(store => store.Header);
  const { candidateInfo } = useSelector((store) => store.Candidate);
  const appliedTo = candidateInfo.applied || [];

  const handleApply = async (id) => {
    if(!(loginInfo.Authenticated && (loginInfo.role === "candidate"))) {
      setShowWarn(true);
      setTimeout(() => {
        setShowWarn(false);
      }, 2000);
      return
    }

    const res = await axios.post(
      "http://localhost:8080/apply",
      {id},
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    if (res.data.status) {
      dispatch(homeSliceAction.setRepaint());
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (!job.jtitle) {
      navigate("/Jobs")
    }

  },[])
    return (
      <>
        {/* This is wrapper */}
        <div
          className={`fixed top-[30%] bg-faintGreen border border-slate-400 text-2xl text-white p-2 rounded-md px-10 md:left-[42%] left-[25%] transition-all duration-500 ${
            showWarn ? "block" : "hidden"
          }`}
        >
          {" "}
          Please Login{" "}
        </div>
        {job.jtitle && (
          <section className="w-full py-5 px-2 flex justify-center bg-faintGray">
            {/* Parent Div for all information div */}
            <div className="space-y-4 min-w-[80%]">
              {/* First div for information */}
              <div className="bg-white p-4 rounded-xl space-y-3 border border-slate-300">
                <div className="flex items-center gap-4">
                  <img
                    src={`http://localhost:8080${job.compimg}`}
                    alt=""
                    className="w-12 md:w-14 rounded-md"
                  />
                  <div>
                    <div className="text-lg font-semibold">{job.jtitle}</div>
                    <div className="text-base opacity-70">{job.compname}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <IoLocationSharp className="opacity-50 text-xl" />
                  {job.location}
                </div>

                <div className="bg-faintGray p-4 rounded-xl space-y-3">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-7">
                    <div className="text-sm opacity-60">Min</div>
                    <div className="text-sm opacity-60">Max</div>
                    <div className="text-sm font-bold opacity-50">
                      ₹{job.minsal}
                    </div>
                    <div className="text-sm font-bold opacity-50">
                      ₹{job.maxsal}
                    </div>
                  </div>
                  <hr />
                  <p className="text-sm flex items-center gap-2">
                    <HiInformationCircle className="text-lg opacity-65" />
                    You can earn more incentive if you perform well
                  </p>
                </div>

                <div className="flex gap-2 font-bold">
                  {job.shift.map((shift, ind) => (
                    <div
                      className="bg-faintGray rounded-md px-2 py-1 text-xs opacity-60"
                      key={ind}
                    >
                      {shift}
                    </div>
                  ))}

                  {job.workplace.map((wp, ind) => (
                    <div
                      className="bg-faintGray rounded-md px-2 py-1 text-xs opacity-60"
                      key={ind}
                    >
                      {wp}
                    </div>
                  ))}

                  <div className="bg-faintGray rounded-md px-2 py-1 text-xs opacity-60">
                    Min. 2 years
                  </div>
                  <div className="bg-faintGray rounded-md px-2 py-1 text-xs opacity-60">
                    {job.field}
                  </div>
                </div>

                {appliedTo.includes(job.id) ? (
                  <div className="w-full bg-faintGreen text-white p-3 rounded-xl text-center">
                    🎊 Applied 🎊
                  </div>
                ) : (
                  <button
                    className="w-full bg-faintGreen text-white p-3 rounded-xl"
                    onClick={() => {
                      handleApply(job.id);
                    }}
                  >
                    Apply for job
                  </button>
                )}
              </div>

              {/* Second Div For Job Description */}
              {job.jobdesc && (
                <div className="bg-white rounded-xl p-4 space-y-3 border border-slate-300">
                  <h1 className="text-base font-bold opacity-85">
                    Job Description
                  </h1>
                  <p className="text-sm">{job.jobdesc}</p>
                </div>
              )}

              {/* Last div for more info */}
              <div className="bg-white rounded-xl p-4 space-y-6 border border-slate-300">
                <h1 className="text-base font-bold opacity-85">
                  Job requirements
                </h1>
                <div className="grid grid-cols-2 gap-y-4">
                  <div className="flex gap-2 items-center">
                    <HiAcademicCap className="opacity-50 text-xl self-start mt-1" />
                    <div>
                      <h1 className="text-base opacity-60 font-semibold">
                        Education
                      </h1>
                      <div>{job.education}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <PiBagSimpleFill className="opacity-50 text-xl self-start mt-1" />
                    <div>
                      <h1 className="text-base opacity-60 font-semibold">
                        Experience
                      </h1>
                      <div>Min. {job.experience}</div>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineAccessTimeFilled className="opacity-50 text-xl self-start mt-1" />
                    <div>
                      <h1 className="text-base opacity-60 font-semibold">
                        Employment type
                      </h1>
                      <div>{job.emptype.map((type) => " " + type)}</div>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <IoPerson className="opacity-50 text-xl self-start mt-1" />
                    <div>
                      <h1 className="text-base opacity-60 font-semibold">
                        Gender
                      </h1>
                      <div>{job.gender}</div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="flex gap-1 text-base font-semibold ">
                  <div className="opacity-60">Job posted by</div>{" "}
                  <div>{job.compname}</div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
}

export default Job;