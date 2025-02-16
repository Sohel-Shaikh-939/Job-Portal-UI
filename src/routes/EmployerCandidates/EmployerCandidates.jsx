import { useEffect, useRef, useState } from "react";
import { employerSliceAction } from "../Employer/employerSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import axios from "axios";
import { empCandidateSliceAction } from "./employerCandSlice";
import Spinner from "../../components/Spinner/Spinner";

const EmployerCandidates = () => {
  const dispatch = useDispatch();
  const page = useRef(1);
  const [noMore,setNoMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const { candidates } = useSelector((store) => store.EmpCandidate);

  const handleCopy = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  }

  useEffect(() => {
    dispatch(employerSliceAction.setSelectedEmployerPage("candidates"));
    dispatch(empCandidateSliceAction.setCandidatesEmpty());
    
    async function data() {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/candidates?page=${page.current}`,
        {headers:{
          Authorization:localStorage.getItem("auth"),
        }}
      );
      if (res.data.status) {
        dispatch(empCandidateSliceAction.setCandidates(res.data.data));
      }
      setLoading(false);
    }
    data();
    return () => {
      // dispatch(empCandidateSliceAction.setCandidatesEmpty());
      page.current = 0;
    }
  }, []);

  const handleLoadMore = async () => {
     page.current++;
     setLoading(true);
    const res = await axios.get(
      `http://localhost:8080/candidates?page=${page.current}`,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    if (!res.data.count) {
      setNoMore(true);
    }
    if (res.data.status) {
      dispatch(empCandidateSliceAction.setCandidates(res.data.data));
    }
    setLoading(false);
  }

  return (
    <>
      <section className="p-0 py-4 md:p-8 w-full bg-[#F3F2EF]">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-2xl md:text-3xl pl-8 md:pl-0">
            Candidates
          </h1>
        </div>
        <div className="py-12 space-y-4 relative">
          {candidates.length ? (
            <>
              {candidates.map((candidate, ind) => (
                <div
                  className="bg-white p-5 rounded-md shadow-xl  md:pb-10 space-y-8"
                  key={ind}
                >
                  <div className="flex flex-col lg:flex-row gap-6 justify-between">
                    <div className="flex gap-5">
                      <img
                        src={`http://localhost:8080${candidate.img}`}
                        alt=""
                        className="w-16 rounded-md"
                      />
                      <div className="space-y-2">
                        <div className="font-semibold text-xl">
                          {candidate.candname}
                        </div>
                        <div className="flex items-center gap-2">
                          <IoLocationSharp className="opacity-50 text-xl" />
                          {candidate.location}
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
                          <div>{candidate.education}</div>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <PiBagSimpleFill className="opacity-50 text-xl self-start mt-3" />
                        <div>
                          <h1 className="text-base opacity-60 font-semibold">
                            Experience
                          </h1>
                          <div>Min. {candidate.experience}</div>
                        </div>
                      </div>
                      <div className="flex gap-2 items-center">
                        <FaLanguage className="opacity-60 text-2xl self-start mt-2" />
                        <div>
                          <h1 className="text-base opacity-60 font-semibold">
                            English Skill
                          </h1>
                          <div>{candidate.englvl}</div>
                        </div>
                      </div>

                      <div className="flex gap-2 items-center">
                        <IoPerson className="opacity-50 text-xl self-start mt-3" />
                        <div>
                          <h1 className="text-base opacity-60 font-semibold">
                            Gender
                          </h1>
                          <div>{candidate.gender}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full bg-faintGray rounded-md p-3 flex justify-between items-center flex-wrap">
                    <div className="text-base md:text-lg font-bold opacity-65">
                      Contact mail :
                    </div>
                    <div className="text-base md:text-lg font-semibold">
                      {candidate.contactmail}
                    </div>
                    <button
                      className="p-2 bg-white border border-slate-500 rounded-md hover:scale-110 transition-all duration-300"
                      value={candidate.contactmail}
                      onClick={handleCopy}
                    >
                      <IoCopyOutline value="xyz.com" />
                    </button>
                  </div>
                </div>
              ))}
              {noMore ? (
                <div className="py-2 px-4 md:py-4 md:px-7 bg-faintGreen rounded-md hover:scale-105 text-white text-xl font-semibold m-auto w-fit transition-all duration-300">
                  No More Candidates
                </div>
              ) : (
                <div
                  className="py-2 px-4 md:py-4 md:px-7 bg-faintGreen rounded-md hover:scale-105 text-white text-xl font-semibold m-auto w-fit transition-all duration-300 min-w-36 relative min-h-16"
                  onClick={handleLoadMore}
                >
                  {loading ? (
                    <div
                      className={`${
                        loading ? "absolute" : "hidden"
                      } z-50  rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0 `}
                    >
                      <Spinner setLoading={setLoading} />
                    </div>
                  ) : (
                    "Load More"
                  )}
                </div>
              )}
            </>
          ) : (
            <div className="absolute top-[50%] left-[10%] md:left-[20%] lg:left-[35%] text-3xl font-bold opacity-65">
              No Candidates
            </div>
          )}
          <div
            className={`${
              loading ? "absolute" : "hidden"
            } z-50  rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0 `}
          >
            <Spinner setLoading={setLoading} />
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployerCandidates;
