import { useEffect, useRef, useState } from "react";
import { employerSliceAction } from "../Employer/employerSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoPerson } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import axios from "axios";
import { homeSliceAction } from "../Home/homeSlice";
import Spinner from "../../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const EmployerInterested = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showInterviewPopup, setShowInterviewPopup] = useState(false);
  const cndName = useRef("-");
  const jtitle = useRef("-");
  const candId = useRef("");
  const jobId = useRef("");
  const { employerInfo } = useSelector((store) => store.EmployerProfile);

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };

  const handleReject = async (appl) => {
    setLoading(true);
    const res = await axios.patch(
      "http://localhost:8080/reject",
      { candid: appl.cand[0].id, jid: appl.jid },
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    if (res.data.status) {
      dispatch(homeSliceAction.setRepaint());
      
    }
    setLoading(false);
  };

  useEffect(() => {
    dispatch(employerSliceAction.setSelectedEmployerPage("interested"));
  }, []);

  const handleScheduleInterview = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(
      "http://localhost:8080/schedule",
      {
        jid: jobId.current,
        candid: candId.current,
        location: e.target.location.value,
        date: e.target.date.value,
        time: e.target.time.value,
      },
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );

    if (res.data.status) {
      dispatch(employerSliceAction.setCurrentPage("Interviews"));
       dispatch(homeSliceAction.setRepaint());
    }
    setShowInterviewPopup(false);
    setLoading(false);
  };

  return (
    <>
      <section className="p-0 py-4 md:p-8 w-full bg-[#F3F2EF] relative h-full">
        <div
          className={`${
            loading ? "absolute" : "hidden"
          } z-50 bg rounded-lg flex justify-center bg-[#1f1e1e29] items-center top-0 left-0 right-0 bottom-0 `}
        >
          <Spinner />
        </div>
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-2xl md:text-3xl pl-8 md:pl-0">
            Interested Candidates ({employerInfo.appliedcandidates.length})
          </h1>
        </div>
        <div className="py-12 space-y-4">
          {employerInfo.appliedcandidates.length ? (
            employerInfo.appliedcandidates.map((appl, ind) => (
              <div
                className="bg-white p-5 rounded-md shadow-xl  md:pb-10 space-y-8"
                key={ind}
              >
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div className="flex gap-5">
                    <img
                      src={`http://localhost:8080${appl.cand[0].img}`}
                      alt=""
                      className="w-16 rounded-md"
                    />
                    <div className="space-y-2">
                      <div className="font-semibold text-xl">
                        {appl.cand[0].candname}
                      </div>
                      <div className="flex items-center gap-2">
                        <IoLocationSharp className="opacity-50 text-xl" />
                        {appl.cand[0].location}
                      </div>
                    </div>
                  </div>

                  <div className="grid space-y-4 lg:space-y-0 grid-cols-2 lg:grid-cols-4 gap-x-12">
                    <div className="flex gap-2 items-center">
                      <HiAcademicCap className="opacity-50 text-xl self-start mt-3" />
                      <div>
                        <h1 className="text-base opacity-60 font-semibold">
                          Education
                        </h1>
                        <div>{appl.cand[0].education}</div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <PiBagSimpleFill className="opacity-50 text-xl self-start mt-3" />
                      <div>
                        <h1 className="text-base opacity-60 font-semibold">
                          Experience
                        </h1>
                        <div>Min. {appl.cand[0].experience}</div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaLanguage className="opacity-60 text-2xl self-start mt-2" />
                      <div>
                        <h1 className="text-base opacity-60 font-semibold">
                          English Skill
                        </h1>
                        <div>{appl.cand[0].englvl}</div>
                      </div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <IoPerson className="opacity-50 text-xl self-start mt-3" />
                      <div>
                        <h1 className="text-base opacity-60 font-semibold">
                          Gender
                        </h1>
                        <div>{appl.cand[0].gender}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between p-3">
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="text-lg font-semibold opacity-70 ">
                      Applied for :
                    </div>
                    <div className="text-lg text-faintGreen" key={ind}>
                      {appl.jtitle}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <a
                      className="bg-faintGreen hover:opacity-80 transition text-white font-semibold px-4 py-2 md:py-2 md:px-9 rounded-md border border-slate-300 cursor-pointer"
                      target="_blank"
                      href={"http://localhost:8080" + appl.resume}
                    >
                      Resume
                    </a>
                    <button
                      className="bg-blue-600 hover:opacity-80 transition text-white font-semibold px-4 py-2 md:py-2 md:px-9 rounded-md border border-slate-300"
                      onClick={() => {
                        setShowInterviewPopup(true);
                        cndName.current = appl.cand[0].candname;
                        jtitle.current = appl.jtitle;
                        candId.current = appl.cand[0].id;
                        jobId.current = appl.jid;
                      }}
                    >
                      Schedule Interview
                    </button>
                    <button
                      className="bg-red-500 hover:opacity-80 transition text-white font-semibold px-4 py-2 md:py-2 md:px-9 rounded-md border border-slate-300"
                      onClick={() => {
                        handleReject(appl);
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </div>

                <div className="w-full bg-faintGray rounded-md p-3 flex justify-between items-center flex-wrap">
                  <div className="text-base md:text-lg font-bold opacity-65">
                    Contact mail :
                  </div>
                  <div className="text-base md:text-lg font-semibold">
                    {appl.cand[0].contactmail}
                  </div>
                  <button
                    className="p-2 bg-white border border-slate-500 rounded-md hover:scale-110 transition-all duration-300"
                    value={appl.cand[0].contactmail}
                    onClick={handleCopy}
                  >
                    <IoCopyOutline value="xyz.com" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-3xl font-bold opacity-65">
              There are No Interested Candidates
            </div>
          )}
        </div>
      </section>
      {showInterviewPopup && (
        <div className="absolute top-0 left-0  w-full h-full bg-inherit-50">
          <form onSubmit={handleScheduleInterview}>
            <div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
           bg-white border border-slate-700 rounded-xl p-8 flex flex-col gap-3"
            >
              <h1 className="font-semibold text-xl">Schedule Interview</h1>
              <hr className="border-t-2 border-gray-400 my-1" />
              <div className="flex gap-2 font-semibold">
                <div>Post : </div>
                <div className="opacity-80">{jtitle.current}</div>
              </div>
              <div className="flex gap-2 font-semibold">
                <div>Candidate : </div>
                <div className="opacity-80">{cndName.current}</div>
              </div>

              <div className="mt-4 flex gap-5">
                <div className="flex flex-col gap-1">
                  <label htmlFor="loc" className="font-semibold">
                    Location
                  </label>
                  <textarea
                    name="location"
                    id="loc"
                    className="outline-faintGreen border border-slate-500 rounded-sm p-1"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="d" className="font-semibold">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="d"
                    className="outline-faintGreen border border-slate-500 rounded-sm p-1"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="t" className="font-semibold">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="t"
                    className="outline-faintGreen border border-slate-500 rounded-sm p-1"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button className="bg-faintGreen hover:opacity-80 transition text-white font-semibold px-4 py-2 md:py-2 md:px-9 rounded-md border border-slate-300 cursor-pointer w-full mt-5" type="submit">
                  Schedule
                </button>
                <div
                  className="bg-red-500 hover:opacity-80 transition text-white font-semibold px-4 py-2 md:py-2 md:px-9 rounded-md border border-slate-300 cursor-pointer w-full mt-5 text-center"
                  onClick={() => {
                    setShowInterviewPopup(false);
                  }}
                >
                  Cancel
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EmployerInterested;
