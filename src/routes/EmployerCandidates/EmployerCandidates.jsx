import { useEffect } from "react";
import { employerSliceAction } from "../Employer/employerSlice";
import { useDispatch } from "react-redux";
import { IoLocationSharp } from "react-icons/io5";
import tmp from "../../assets/logo.webp";
import { IoPerson } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";

const EmployerCandidates = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employerSliceAction.setSelectedEmployerPage("candidates"));
  }, []);

  return (
    <>
      <section className="p-0 py-4 md:p-8 w-full bg-[#F3F2EF]">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-2xl md:text-3xl pl-8 md:pl-0">
            Suitable Candidates (97)
          </h1>
        </div>
        <div className="py-12 space-y-4 ">
          <div className="bg-white p-5 rounded-md shadow-xl  md:pb-10 space-y-8">
            <div className="flex flex-col lg:flex-row gap-6 justify-between">
              <div className="flex gap-5">
                <img src={tmp} alt="" className="w-16 rounded-md" />
                <div className="space-y-2">
                  <div className="font-semibold text-xl">Jamu Bhau</div>
                  <div className="flex items-center gap-2">
                    <IoLocationSharp className="opacity-50 text-xl" />
                    Pune
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
                    <div>10th</div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <PiBagSimpleFill className="opacity-50 text-xl self-start mt-3" />
                  <div>
                    <h1 className="text-base opacity-60 font-semibold">
                      Experience
                    </h1>
                    <div>Min. 2 years</div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <FaLanguage className="opacity-60 text-2xl self-start mt-2" />
                  <div>
                    <h1 className="text-base opacity-60 font-semibold">
                      English Skill
                    </h1>
                    <div>Intermediate</div>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <IoPerson className="opacity-50 text-xl self-start mt-3" />
                  <div>
                    <h1 className="text-base opacity-60 font-semibold">
                      Gender
                    </h1>
                    <div>Any gender</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-faintGray rounded-md p-3 flex justify-between">
              <div className="text-base md:text-lg font-bold opacity-65">
                Contact mail :
              </div>
              <div className="text-base md:text-lg font-semibold">
                jamubhau@gmail.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployerCandidates;
