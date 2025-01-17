import tmp from "../../assets/logo.webp"
import { IoLocationSharp } from "react-icons/io5";
import { HiInformationCircle } from "react-icons/hi2";
import { IoPerson } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { PiBagSimpleFill } from "react-icons/pi";

const Job = () => {
    return (
      <>
        {/* This is wrapper */}
        <section className="w-full py-5 px-2 flex justify-center bg-faintGray">
          {/* Parent Div for all information div */}
          <div className="space-y-4">
            {/* First div for information */}
            <div className="bg-white p-4 rounded-xl space-y-3 border border-slate-300">
              <div className="flex items-center gap-4">
                <img src={tmp} alt="" className="w-12 md:w-16 rounded-xl" />
                <div>
                  <div className="text-lg font-semibold">
                    Field Sales Executive
                  </div>
                  <div className="text-base opacity-70">Meezan Enterprises</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <IoLocationSharp  className="opacity-50 text-xl"/>
                Pune
              </div>

              <div className="bg-faintGray p-4 rounded-xl space-y-3">
                <div className="grid grid-cols-2 gap-y-4 gap-x-7">
                  <div className="text-sm opacity-60">Min</div>
                  <div className="text-sm opacity-60">Max</div>
                  <div className="text-sm font-bold opacity-50">₹15000</div>
                  <div className="text-sm font-bold opacity-50">₹30000</div>
                </div>
                <hr />
                <p className="text-sm flex items-center gap-2">
                  <HiInformationCircle className="text-lg opacity-65" />
                  You can earn more incentive if you perform well
                </p>
              </div>

              <div className="flex gap-2 font-bold">
                <div className="bg-faintGray rounded-md px-2 py-1 text-xs opacity-60">
                  Full Time
                </div>
                <div className="bg-faintGray rounded-md px-2 py-1 text-xs opacity-60">
                  Min. 2 years
                </div>
              </div>

              <button className="w-full bg-faintGreen text-white p-3 rounded-xl">
                Apply for job
              </button>
            </div>

            {/* Second Div For Job Description */}
            <div className="bg-white rounded-xl p-4 space-y-3 border border-slate-300">
              <h1 className="text-base font-bold opacity-85">
                Job Description
              </h1>
              <p className="text-sm">
                The job includes field marketing, including traveling all over
                Maharashtra to appoint distributors and visit retailers.
                Preferred candidates will be from Unani and Ayurvedic
                backgrounds.
              </p>
            </div>

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
                    <div>10th</div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <PiBagSimpleFill className="opacity-50 text-xl self-start mt-1" />
                  <div>
                    <h1 className="text-base opacity-60 font-semibold">
                      Experience
                    </h1>
                    <div>Min. 2 years</div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <MdOutlineAccessTimeFilled className="opacity-50 text-xl self-start mt-1" />
                  <div>
                    <h1 className="text-base opacity-60 font-semibold">
                      Employment type
                    </h1>
                    <div>Sales & BD</div>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <IoPerson className="opacity-50 text-xl self-start mt-1" />
                  <div>
                    <h1 className="text-base opacity-60 font-semibold">
                      Gender
                    </h1>
                    <div>Any gender</div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex gap-1 text-base font-semibold ">
                <div className="opacity-60">Job posted by</div>{" "}
                <div>Meezan Enterprises</div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Job;