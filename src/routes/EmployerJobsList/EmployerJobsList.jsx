import { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { employerSliceAction } from "../Employer/employerSlice";

const EmployerJobsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employerSliceAction.setSelectedEmployerPage("jobs"));
  }, []);
  
  return (
    <>
      <section className="p-8 w-full bg-[#F3F2EF]">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-3xl">All Jobs (2)</h1>
          <button className="bg-faintGreen text-white font-semibold py-2 px-4 rounded-md outline-none border border-slate-200">
            Post a new job
          </button>
        </div>
        <div className="py-12 space-y-4">
          <div className="bg-white p-5 rounded-md shadow-xl flex justify-between pb-20 cursor-pointer">
            <div className="space-y-2">
              <h1 className="text-lg font-semibold ">Software Tester</h1>
              <div className=" opacity-50">
                Maharashtra | Posted on : 21-1-2025 | jamu bhau
              </div>
            </div>
            <div className=" opacity-35 font-semibold space-y-2 px-5 border border-l-slate-500">
              <div>-</div>
              <div>Applied to job</div>
            </div>
            <div className="cursor-pointer border border-slate-400 p-2 h-fit w-fit rounded-md">
              <BsThreeDotsVertical />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployerJobsList;
