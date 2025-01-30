import { useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { employerSliceAction } from "../Employer/employerSlice";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { homeSliceAction } from "../Home/homeSlice";

const EmployerJobsList = () => {
  const dispatch = useDispatch();
  const { employerInfo } = useSelector((store) => store.EmployerProfile);

  useEffect(() => {
    dispatch(employerSliceAction.setSelectedEmployerPage("jobs"));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleDeletePost = async (id) => {
      const res = await axios.delete(
        `http://localhost:8080/deletejob/${id}`,
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
  }

  return (
    <>
      <section className="p-0 py-4 md:p-8 w-full bg-[#F3F2EF] ">
        <div className="w-full flex justify-between">
          <h1 className="font-semibold text-2xl md:text-3xl pl-8 md:pl-0">
            All Jobs ({employerInfo.postedjobs.length})
          </h1>
          <Link to="/Employer/JobPost">
            <button className="bg-faintGreen text-white font-semibold py-2 px-4 rounded-md outline-none border border-slate-200">
              Post a new job
            </button>
          </Link>
        </div>
        <div className="py-12 space-y-4 ">
          {employerInfo.postedjobs.length ? (
            employerInfo.postedjobs.map((job,ind) => (
              <div className="bg-white p-5 rounded-md shadow-xl flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-40 md:pb-20 relative" key={ind}>
                <div className="space-y-2">
                  <h1 className="text-lg font-semibold ">
                    {job.jtitle}
                  </h1>
                  <div className=" opacity-50">
                    {job.location} | Posted on :{" "}
                    {job.date} | {employerInfo.empname}
                  </div>
                </div>
                <div className=" opacity-35 font-semibold space-y-2 md:px-5 border-none md:border border-l-slate-500">
                  <div>{job.appliedcount ?job.appliedcount: "-" }</div>
                  <div>Applied to job</div>
                </div>
                <div className="cursor-pointer border border-slate-400 p-2 h-fit w-fit rounded-md absolute top-4 right-4" onClick={() => {
                  handleDeletePost(job.id);
                }}>
                  <MdDelete className="text-red-600" />
                </div>
              </div>
            ))
          ) : (
            <div className="absolute top-[50%] left-[10%] md:left-[20%] lg:left-[35%] text-3xl font-bold opacity-65">
              There are No Jobs Posted
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default EmployerJobsList;
