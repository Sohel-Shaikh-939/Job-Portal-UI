import logo from "../../assets/logo.webp";
import { PiListBold } from "react-icons/pi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiBagSimple } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { headerSliceAction } from "./headerSlice";
import axios from "axios";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { isInEmployerSection } = useSelector((store) => store.Header);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mail = useRef("");
  const otp = useRef();
  const loginType = useRef("");
  const { loginInfo } = useSelector((store) => store.Header);

  const handleShowOptClick = () => {
    isInEmployerSection
      ? dispatch(headerSliceAction.setShowEmployerOpt(true))
      : setShowSideBar(true);
  };

  const handleCloseOptClick = () => {
    setShowSideBar(false);
  };

  const handleShowProfile = () => {
    setShowProfile(true);
  };

  const handleHideProfile = () => {
    setShowProfile(false);
  };

  const handleLoginOpt = (type) => {
    loginType.current = type;
    setShowLogin(true);
  };

  const handleHideLogin = () => {
    setShowLogin(false);
    setOtpSent(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:8080/login", {
      mail: e.target.mail.value,
    });

    if (res.data.status) {
      mail.current = e.target.mail.value;
      setOtpSent(true);
    } else {
      e.target.mail.value = "";
      e.target.mail.placeholder = "Unable to send otp";
    }
  };

  const handleOtp = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:8080/verify", {
      mail: mail.current,
      otp: e.target.otp.value,
      type: loginType.current,
    });
    if (res.data.status) {
      localStorage.setItem("auth", res.data.auth);
      setShowLogin(false);
      setOtpSent(false);
      if (!res.data.valid) {
        if (res.data.candidate) {
          navigate("/CandidateLogin");
        } else {
          navigate("/EmployerLogin");
        }
      }
      dispatch(headerSliceAction.setLoginInfo({ Authenticated: true }));
      // navigate("/Employer/")
    } else {
      e.target.otp.value = "";
      e.target.otp.placeholder = "Wrong otp";
    }
  };

  const handleLogout = () => {
    handleHideProfile();
    localStorage.removeItem("auth");
    dispatch(headerSliceAction.setLoginInfo({ Authenticated: false }));
    dispatch(headerSliceAction.setLoginInfo({ role: "" }));
    navigate("/");
  };

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 lg:px-32 py-1 px-5 pt-4 md:pt-0 w-full flex items-center justify-between z-50 ${
          isInEmployerSection ? "bg-white" : "bg-faintGray"
        }`}
      >
        {/* left section of header */}
        <div className="flex justify-between w-26 items-center py-5">
          <PiListBold
            className="text-2xl mr-2  md:hidden"
            onClick={handleShowOptClick}
          />
          {/* for logo */}
          <Link to="/">
            <div className="w-10 mr-0 md:mr-14 md:w-16 rounded-lg md:rounded-2xl overflow-hidden">
              <img src={logo} alt="hello world" className="w-full " />
            </div>
          </Link>
          {/* ul for options */}
          {!isInEmployerSection && (
            <ul className="hidden md:flex space-x-8 text-slate-900 text-base leading-10  font-semibold  ">
              <li>
                <Link to="/Jobs" className="cursor-pointer">
                  Jobs
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer">Companies</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Right section */}
        {loginInfo.Authenticated ? (
          <div className="relative">
            {showProfile ? (
              <div
                className="bg-white w-12 h-12 flex justify-center items-center rounded-full cursor-pointer"
                onClick={handleHideProfile}
              >
                <RxCross1 className="text-lg" />
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full cursor-pointer overflow-hidden">
                <img
                  src={`http://localhost:8080/Upload/${
                    loginInfo.img
                  }?n=${Date.now()}`}
                  alt="Profile Pic"
                  onClick={handleShowProfile}
                  className="h-full w-full"
                />
              </div>
            )}
            <div
              className={`${
                showProfile ? "absolute" : "hidden"
              } bg-white w-[300px] rounded-xl shadow-xl border border-slate-200 -bottom-48 right-0 p-4 transition-all duration-300`}
            >
              <div className="flex gap-3 items-center pb-3 border-b border-b-black border-opacity-25">
                <div className="w-11 h-11 rounded-full cursor-pointer overflow-hidden">
                  <img
                    src={`http://localhost:8080/Upload/${
                      loginInfo.img
                    }?n=${Date.now()}`}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <div>
                  <div className="font-semibold">{loginInfo.name}</div>
                  <div className="text-sm font-semibold opacity-60 leading-6">
                    {loginInfo.mail}
                  </div>
                </div>
              </div>
              <div
                className="flex gap-3 items-center py-3 cursor-pointer"
                onClick={() => {
                  if (loginInfo.role === "candidate") {
                    handleHideProfile();
                    navigate("/CandidateProfile");
                  } else if (loginInfo.role === "employer") {
                    handleHideProfile();
                    navigate("/Employer/Profile");
                  }
                }}
              >
                <IoPerson className="text-lg opacity-75" />{" "}
                <h1 className=" font-semibold opacity-60">View Profile</h1>
              </div>
              <div
                className="flex gap-3 items-center py-1 cursor-pointer"
                onClick={handleLogout}
              >
                <TbLogout className="text-xl text-red-600" />{" "}
                <h1 className=" font-semibold opacity-60">Logout</h1>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <button
              className="text-xs bg-transparent text-green-900 font-semibold md:text-base md:w-20 lg:w-fit leading-10"
              onClick={() => {
                handleLoginOpt("employer");
              }}
            >
              Employer Login
            </button>
            <button
              className="text-white py-2 px-3 text-xs md:text-base md:w-32 lg:w-fit bg-faintGreen  rounded  font-semibold text-[.95rem] ml-4 hover:text-faintGreen hover:bg-faintGray border-2 border-faintGreen"
              onClick={() => {
                handleLoginOpt("candidate");
              }}
            >
              Candidate Login
            </button>
          </div>
        )}
      </nav>

      {/* This section is for small screens only visible when three lines are clicked*/}
      <nav
        className={`w-full h-full fixed z-50 top-0 bottom-0 duration-700 ${
          showSideBar ? "left-0" : "left-[-110%]"
        } md:hidden flex gap-20`}
      >
        <div className="h-full w-full bg-white py-9 rounded-r-3xl space-y-4 z-50">
          <Link to="/" onClick={handleCloseOptClick}>
            <div className="overflow-hidden pl-6">
              <img src={logo} alt="" className="w-14 rounded-2xl" />
            </div>
          </Link>

          {/* Options list */}
          <div>
            <ul className="space-y-1 text-slate-900 text-base leading-10 py-5 font-semibold  ">
              <li onClick={handleCloseOptClick}>
                <Link to="/Jobs" className="flex gap-3 items-center pl-6">
                  <HiOutlineBuildingOffice2 className="text-xl" />
                  Jobs
                </Link>
              </li>
              <li onClick={handleCloseOptClick}>
                <Link className="flex gap-3 items-center pl-6">
                  <PiBagSimple className="text-xl" />
                  Companies
                </Link>
              </li>
            </ul>
            {loginInfo.Authenticated ? (
              <>
                <div className="border-b border-b-black border-opacity-20"></div>
                <div
                  className="flex gap-3 items-center pl-6 pt-5"
                  onClick={() => {
                    handleLogout();
                    handleCloseOptClick();
                  }}
                >
                  <CiLogout className="text-xl text-red-700" /> Logout
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="bg-white h-fit w-fit mt-10 mr-8 p-2 rounded-full">
          {showSideBar && <RxCross1 onClick={handleCloseOptClick} />}
        </div>
      </nav>

      {/* Login Popup */}

      <section
        className={`fixed ${
          showLogin ? "flex" : "hidden"
        } w-full h-full bg-[#08080876] top-0 left-0 right-0 bottom-0 z-50 justify-center items-end md:items-center`}
      >
        {otpSent ? (
          <form onSubmit={handleOtp}>
            <div className="w-[100vw] md:max-w-md relative bg-white p-8 rounded-lg flex flex-col gap-5  ">
              <h1 className="text-xl font-bold">Enter OTP</h1>
              <input
                type="number"
                name="otp"
                id=""
                placeholder="Eg: xyz@gmail.com"
                className="outline-faintGreen border border-slate-300 p-2 rounded-lg"
              />
              <hr />
              <input
                type="submit"
                value="Verify OTP"
                className="bg-faintGreen text-white p-2 w-full rounded-md outline-none font-semibold text-lg"
                ref={otp}
              />
              <div className="absolute bg-black text-white md:text-black md:bg-transparent p-2 rounded-full right-5 -top-10 md:top-5 cursor-pointer">
                <RxCross1
                  className="text-base md:text-lg"
                  onClick={handleHideLogin}
                />
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="w-[100vw] md:max-w-md relative bg-white p-8 rounded-lg flex flex-col gap-5  ">
              <h1 className="text-xl font-bold">Enter your email</h1>
              <input
                type="email"
                name="mail"
                placeholder="Eg: xyz@gmail.com"
                className="outline-faintGreen border border-slate-300 p-2 rounded-lg"
                required
              />
              <p className="text-sm opacity-65">Be a part of our community</p>
              <hr />
              <input
                type="submit"
                value="Next"
                className="bg-faintGreen text-white p-2 w-full rounded-md outline-none font-semibold text-lg "
              />
              <div className="absolute bg-black text-white md:text-black md:bg-transparent p-2 rounded-full right-5 -top-10 md:top-5 cursor-pointer">
                <RxCross1
                  className="text-base md:text-lg"
                  onClick={handleHideLogin}
                />
              </div>
            </div>
          </form>
        )}
      </section>
    </>
  );
};

export default Header;
