import { useEffect } from "react";
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

const EmployerInterested = () => {
  const dispatch = useDispatch();
  const { employerInfo } = useSelector((store) => store.EmployerProfile);

    const handleCopy = (e) => {
      navigator.clipboard.writeText(e.currentTarget.value);
    };

    const handleReject = async (id) => {
      const res = await axios.patch("http://localhost:8080/reject",{id},{
        headers:{
          Authorization:localStorage.getItem("auth"),
        }
      });
      if (res.data.status) {
        dispatch(homeSliceAction.setRepaint())
      }
    }

  useEffect(() => {
    dispatch(employerSliceAction.setSelectedEmployerPage("interested"));
  }, []);

  return (
    <>
      <section className="p-0 py-4 md:p-8 w-full bg-[#F3F2EF]">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-2xl md:text-3xl pl-8 md:pl-0">
            Interested Candidates ({employerInfo.appliedcandidates.length})
          </h1>
        </div>
        <div className="py-12 space-y-4 ">
          {employerInfo.appliedcandidates.length ? (
            employerInfo.appliedcandidates.map((cand, ind) => (
              <div
                className="bg-white p-5 rounded-md shadow-xl  md:pb-10 space-y-8"
                key={ind}
              >
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  <div className="flex gap-5">
                    <img
                      src={`http://localhost:8080${
                        cand.img
                      }`}
                      alt=""
                      className="w-16 rounded-md"
                    />
                    <div className="space-y-2">
                      <div className="font-semibold text-xl">
                        {cand.candname}
                      </div>
                      <div className="flex items-center gap-2">
                        <IoLocationSharp className="opacity-50 text-xl" />
                        {cand.location}
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
                        <div>{cand.education}</div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <PiBagSimpleFill className="opacity-50 text-xl self-start mt-3" />
                      <div>
                        <h1 className="text-base opacity-60 font-semibold">
                          Experience
                        </h1>
                        <div>Min. {cand.experience}</div>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <FaLanguage className="opacity-60 text-2xl self-start mt-2" />
                      <div>
                        <h1 className="text-base opacity-60 font-semibold">
                          English Skill
                        </h1>
                        <div>{cand.englvl}</div>
                      </div>
                    </div>

                    <div className="flex gap-2 items-center">
                      <IoPerson className="opacity-50 text-xl self-start mt-3" />
                      <div>
                        <h1 className="text-base opacity-60 font-semibold">
                          Gender
                        </h1>
                        <div>{cand.gender}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between p-3">
                  <div className="flex flex-col md:flex-row gap-2">
                    <div className="text-lg font-semibold opacity-70 ">
                      Applied for :
                    </div>
                    {employerInfo.postedjobs
                      .filter((job) => job.applicants.includes(cand.id))
                      .map((job, ind) => {
                        return (
                          <div className="text-lg text-faintGreen" key={ind}>
                            {ind ? "|" : ""} {job.jtitle}
                          </div>
                        );
                      })}
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      className="bg-red-500 text-white font-semibold px-4 py-2 md:py-2 md:px-9 rounded-md border border-slate-300"
                      onClick={() => {
                        handleReject(cand.id);
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
                    {cand.contactmail}
                  </div>
                  <button
                    className="p-2 bg-white border border-slate-500 rounded-md hover:scale-110 transition-all duration-300"
                    value={"hhhhhh"}
                    onClick={handleCopy}
                  >
                    <IoCopyOutline value="xyz.com" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="absolute top-[50%] left-[10%] md:left-[20%] lg:left-[35%] text-3xl font-bold opacity-65">
              There are No Interested Candidates
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default EmployerInterested;
