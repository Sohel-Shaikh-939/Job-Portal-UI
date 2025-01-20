import tmp from "../../assets/logo.webp";
import { IoLocationSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { FaPen } from "react-icons/fa";

const CandidateProfile = () => {
    return (
      <>
        <section className="w-full bg-faintGray flex justify-center items-center py-20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <div className="p-9 bg-white rounded-xl flex gap-8">
                <div className="flex flex-col items-center gap-3">
                  <img src={tmp} alt="" className="w-20 rounded-full" />
                  <form action="">
                    <label
                      htmlFor="pic"
                      className="text-sm font-semibold opacity-90 text-faintGreen cursor-pointer"
                    >
                      Change Photo
                    </label>
                    <input type="file" name="" id="pic" className="hidden" />
                    <button className="py-1 px-3 bg-faintGreen rounded-lg outline-none border border-slate-300 text-whiten hidden">
                      Save
                    </button>
                  </form>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold text-lg">Sohel Shaikh</h1>
                  <div className="flex items-center gap-2 opacity-70 font-semibold mt-2">
                    <HiAcademicCap className="opacity-90" /> 12th Pass
                  </div>
                  <div className="flex items-center gap-2 opacity-70  font-semibold">
                    <IoLocationSharp className="opacity-90" /> Maharashtra
                  </div>
                </div>
              </div>
              <div className="p-9 bg-white rounded-xl grid grid-cols-2 gap-y-6 gap-x-9">
                <div>
                  <div className="text-sm opacity-60 font-semibold">
                    Email ID
                  </div>
                  <div className="font-semibold opacity-85">xyz.gmail.com</div>
                </div>
                <div>
                  <div className="text-sm opacity-60 font-semibold">
                    Date of birth
                  </div>
                  <div className="font-semibold opacity-85">17-8-2004</div>
                </div>
                <div>
                  <div className="text-sm opacity-60 font-semibold">Gender</div>
                  <div className="font-semibold opacity-85">Male</div>
                </div>
                <div>
                  <div className="text-sm opacity-60 font-semibold">
                    Current Location
                  </div>
                  <div className="font-semibold opacity-85">Pune</div>
                </div>
              </div>
            </div>

            <div className="py-7 px-4 md:p-9 bg-white rounded-xl flex flex-col gap-8 relative">
              <button className="absolute top-4 right-4 z-50 flex gap-1 items-center font-semibold text-faintGreen">
                <FaPen className="text-xs" />
                Edit
              </button>
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Job Role{" "}
                </h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">Job title :</div>
                  <div className="opacity-95">Software developer</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Work Experience{" "}
                </h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">Total Years of experience :</div>
                  <div className="opacity-95">Fresher</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Education{" "}
                </h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">Highest education :</div>
                  <div className="opacity-95">12th Pass</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">Field </h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">Work Field :</div>
                  <div className="opacity-95">Healthcare</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Language{" "}
                </h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">English Skills :</div>
                  <div className="opacity-95">Intermediate</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Prefered Shifts{" "}
                </h1>
                <div className="flex gap-3">
                  <div className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold">
                    Day shift
                  </div>
                  <div className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold ">
                    Night Shift
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Preferred Workplace{" "}
                </h1>
                <div className="flex gap-3">
                  <div className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold">
                    Work from Home
                  </div>
                  <div className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold ">
                    Work from Office
                  </div>
                  <div className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold ">
                    Field Job
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base ">
                  Preferred Employment Type
                </h1>
                <div className="flex gap-3">
                  <div className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold">
                    Full Time
                  </div>
                  <div className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold ">
                    Part Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default CandidateProfile;