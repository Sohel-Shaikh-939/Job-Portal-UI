import { useDispatch, useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { jobSliceAction } from "../Job/jobSlice";
import { useNavigate } from "react-router-dom";
import { homeSliceAction } from "../Home/homeSlice";
import axios from "axios";
import { useEffect } from "react";

const MyJobs = () => {
  const { candidateInfo } = useSelector((store) => store.Candidate);
  const { loginInfo } = useSelector((store) => store.Header);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowJobDesc = (job) => {
    dispatch(jobSliceAction.setJob(job));
    navigate("/Job");
  };

  const handleDeleteNotification = async (jid) => {
    // setLoading(true);
      const res = await axios.delete(
        `http://localhost:8080/deletenotification/${jid}`,
        {
          headers: {
            "Content-Type": "Application/json",
            Authorization: localStorage.getItem("auth"),
          },
        }
      );
      if(res.data.status) {
        dispatch(homeSliceAction.setRepaint());
      }
      // setLoading(false);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])

  return (
    <>
      <div className="m-auto min-h-[80vh] relative">
        {loginInfo.Authenticated && loginInfo.role === "candidate" ? (
          candidateInfo.applied.length ? (
            <div className="m-auto md:w-[90%] py-5 flex flex-col gap-5">
              <h1 className="text-3xl font-semibold">My Jobs</h1>
              <div className="grid grid-cols-2 gap-3 items-center justify-center">
                {candidateInfo.applied.map((appl, ind) => (
                  <div
                    className="relative hover:scale-105 transition flex gap-5"
                    key={ind}
                  >
                    <div
                      className="px-8 py-7 bg-white rounded-2xl  h-fit w-full min-w-fit overflow-hidden cursor-pointer shadow-2xl border border-slate-200  flex items-center gap-5"
                      onClick={() => {
                        handleShowJobDesc(appl.job[0]);
                      }}
                      key={ind}
                    >
                      <div className="space-y-3">
                        <div className="flex gap-3 items-center">
                          <div className="w-12 h-12 md:w-14 md:h-14 overflow-hidden">
                            <img
                              src={`http://localhost:8080${appl.job[0].compimg}`}
                              alt=""
                              className=" rounded-md h-full w-full "
                            />
                          </div>
                          <div>
                            <div className="text-lg font-semibold">
                              {appl.job[0].jtitle}
                            </div>
                            <div className="text-sm opacity-60">
                              {appl.job[0].compname}
                            </div>
                          </div>
                        </div>

                        <div className="pl-6">
                          <div className="opacity-60 flex items-center gap-2">
                            <IoLocationSharp className="opacity-80" />
                            {appl.job[0].location}
                          </div>
                          <div className="opacity-60 flex items-center gap-2">
                            <GiMoneyStack className="opacity-90" />$
                            {appl.job[0].minsal} - ${appl.job[0].maxsal} monthly
                          </div>
                        </div>

                        <div className="flex gap-2">
                          {appl.job[0].shift.map((shift, ind) => (
                            <div
                              className="bg-[#76767846] rounded-md px-2 py-1 text-xs opacity-65"
                              key={ind}
                            >
                              {shift}
                            </div>
                          ))}
                          <div className="bg-[#76767846] rounded-md px-2 py-1 text-xs opacity-65">
                            Min. {appl.job[0].experience}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-2">
                          <div className="font-semibold">Status :</div>
                          <div
                            className={`font-semibold ${
                              appl.status === "In Review"
                                ? "text-yellow-500"
                                : appl.status === "Interview Scheduled"
                                ? "text-faintGreen"
                                : "text-red-600"
                            }`}
                          >
                            {new Date(`${appl.date}T${appl.time}`) <
                            new Date() ? (
                              <div className="font-semibold text-red-600">
                                Expired
                              </div>
                            ) : (
                              appl.status
                            )}
                          </div>
                        </div>
                        <div className="font-semibold text-base">
                          Interview Information
                        </div>
                        <div className="font-semibold text-sm flex gap-2">
                          <div>Date :</div>
                          <div className=" text-center">
                            {appl.date === "-"
                              ? "-"
                              : new Date(appl.date).toDateString()}
                          </div>
                        </div>
                        <div className="font-semibold text-sm flex gap-2">
                          <div>Time :</div>
                          <div className=" text-center">
                            {appl.time === "-"
                              ? "-"
                              : new Date(
                                  `${appl.date}T${appl.time}`
                                ).toLocaleTimeString()}
                          </div>
                        </div>
                        <div className="font-semibold text-sm flex gap-2">
                          <div>Location :</div>
                          <div className=" text-center">{appl.location}</div>
                        </div>
                      </div>
                    </div>

                    {(appl.status === "Rejected" ||
                      new Date(`${appl.date}T${appl.time}`) < new Date()) && (
                      <div
                        className="cursor-pointer border border-slate-400 p-2 h-fit w-fit rounded-md absolute top-4 right-4"
                        onClick={() => {
                          handleDeleteNotification(appl.job[0].id);
                        }}
                      >
                        <MdDelete className="text-red-600" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-center text-2xl md:text-3xl">
              There are no applied jobs
            </div>
          )
        ) : (
          <div className="absolute text-2xl md:text-3xl font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            Login to see your job status
          </div>
        )}
      </div>
    </>
  );
};

export default MyJobs;
