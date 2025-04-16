import { useEffect } from "react";
import { PiBagSimpleFill } from "react-icons/pi";
import { RiUserSearchFill } from "react-icons/ri";
import { SiGoogleforms } from "react-icons/si";
import { BsPersonVideo3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { headerSliceAction } from "../../components/Header/headerSlice";
import { RxCross1 } from "react-icons/rx";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { employerSliceAction } from "./employerSlice";

const Employer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showEmployerOpt } = useSelector((store) => store.Header);
  const { selectedEmployerPage } = useSelector((store) => store.Employer);
  const { employerInfo } = useSelector((store) => store.EmployerProfile);
  

  useEffect(() =>{  
      dispatch(headerSliceAction.setIsInEmployerSection(true));
      return ()=>{
        dispatch(headerSliceAction.setIsInEmployerSection(false));
        dispatch(employerSliceAction.setCurrentPage("jobs"));
        // dispatch(headerSliceAction.setLoginInfo({ Authenticated: false }));
        // localStorage.removeItem("auth");
      }
  },[]);

  const handleHideOpt = () => {
      dispatch(headerSliceAction.setShowEmployerOpt(false));
  }

    return (
      <>
        <section className="bg-faintGray  min-h-[100vh] w-full flex relative">
          <div className="bg-white min-h-full py-6 border border-slate-200 space-y-8 hidden md:block">
            <div className="flex items-center gap-4 px-9">
              <div className="w-12 h-12 rounded-md overflow-hidden">
                <img
                  src={`http://localhost:8080${employerInfo.compimg}`}
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <h1 className="font-semibold opacity-85 w-fit text-nowrap pr-8">
                {employerInfo.compname}
              </h1>
            </div>
            <ul className="cursor-pointer">
              <Link to="/Employer/EmployerJobsList">
                <li
                  className={`font-bold opacity-70 flex gap-3 items-center py-3 px-9 ${
                    selectedEmployerPage === "jobs" &&
                    "bg-faintGreen text-white"
                  }`}
                  onClick={() => {
                    dispatch(employerSliceAction.setCurrentPage("jobs"));
                  }}
                >
                  <PiBagSimpleFill className="text-base" /> Jobs
                </li>
              </Link>

              <Link to="/Employer/EmployerCandidates">
                <li
                  className={`font-bold opacity-70 flex gap-3 items-center py-3 px-9 ${
                    selectedEmployerPage === "candidates" &&
                    "bg-faintGreen text-white"
                  }`}
                  onClick={() => {
                    dispatch(employerSliceAction.setCurrentPage("candidates"));
                  }}
                >
                  <RiUserSearchFill className="text-lg" />
                  Candidates
                </li>
              </Link>

              <Link to="/Employer/EmployerInterested">
                <li
                  className={`font-bold opacity-70 flex gap-3 items-center py-3 px-9 ${
                    selectedEmployerPage === "interested" &&
                    "bg-faintGreen text-white"
                  }`}
                  onClick={() => {
                    dispatch(employerSliceAction.setCurrentPage("interested"));
                  }}
                >
                  <SiGoogleforms className="text-lg" />
                  Interested
                </li>
              </Link>

              <Link to="/Employer/Interviews">
                <li
                  className={`font-bold opacity-70 flex gap-3 items-center py-3 px-9 ${
                    selectedEmployerPage === "Interviews" &&
                    "bg-faintGreen text-white"
                  }`}
                  onClick={() => {
                    dispatch(employerSliceAction.setCurrentPage("Interviews"));
                  }}
                >
                  <BsPersonVideo3 className="text-lg" />
                  Interviews
                </li>
              </Link>
            </ul>
          </div>

          <div
            className={`bg-white  py-6 border border-slate-200 space-y-8 absolute top-0
               ${
                 showEmployerOpt ? "left-0" : "-left-full"
               } bottom-0 md:hidden transition-all duration-500 z-40`}
          >
            <div className="flex items-center gap-4 px-9 relative">
              <div className="w-12 h-12 rounded-md">
                <img
                  src={`http://localhost:8080${employerInfo.compimg}`}
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <h1 className="font-semibold opacity-85">
                {employerInfo.compname}
              </h1>
            </div>
            <ul className="cursor-pointer">
              <Link to="/Employer/EmployerJobsList">
                <li
                  className={`font-bold opacity-70 flex gap-3 items-center py-3 px-9 ${
                    selectedEmployerPage === "jobs" &&
                    "bg-faintGreen text-white"
                  }`}
                  onClick={() => {
                    dispatch(headerSliceAction.setShowEmployerOpt(false));
                    dispatch(employerSliceAction.setCurrentPage("jobs"));
                  }}
                >
                  <PiBagSimpleFill className="text-base" /> Jobs
                </li>
              </Link>
              <Link to="/Employer/EmployerCandidates">
                <li
                  className={`font-bold opacity-70 flex gap-3 items-center py-3 px-9 ${
                    selectedEmployerPage === "candidates" &&
                    "bg-faintGreen text-white"
                  }`}
                  onClick={() => {
                    dispatch(headerSliceAction.setShowEmployerOpt(false));
                  }}
                >
                  <RiUserSearchFill className="text-lg" />
                  Candidates
                </li>
              </Link>
              <Link to="/Employer/EmployerInterested">
                <li
                  className={`font-bold opacity-70 flex gap-3 items-center py-3 px-9 ${
                    selectedEmployerPage === "interested" &&
                    "bg-faintGreen text-white"
                  }`}
                  onClick={() => {
                    dispatch(headerSliceAction.setShowEmployerOpt(false));
                    dispatch(employerSliceAction.setCurrentPage("interested"));
                  }}
                >
                  <SiGoogleforms className="text-lg" />
                  Interested
                </li>
              </Link>

              <Link to="/Employer/Interviews">
                <li
                  className={`font-bold opacity-70 flex gap-3 items-center py-3 px-9 ${
                    selectedEmployerPage === "Interviews" &&
                    "bg-faintGreen text-white"
                  }`}
                  onClick={() => {
                    dispatch(headerSliceAction.setShowEmployerOpt(false));
                    dispatch(employerSliceAction.setCurrentPage("Interviews"));
                  }}
                >
                  <BsPersonVideo3 className="text-lg" />
                  Interviews
                </li>
              </Link>
            </ul>
            <div className="absolute bg-black text-white md:text-black md:bg-transparent p-2 rounded-full -right-14 top-0 md:top-5 cursor-pointer">
              <RxCross1
                className="text-base md:text-lg"
                onClick={handleHideOpt}
              />
            </div>
          </div>
          <div className="w-full relative">
            <Outlet></Outlet>
          </div>
        </section>
      </>
    );
}

export default Employer;