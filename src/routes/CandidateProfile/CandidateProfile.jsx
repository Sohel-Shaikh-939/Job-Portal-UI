import tmp from "../../assets/logo.webp";
import { IoLocationSharp } from "react-icons/io5";
import { HiAcademicCap } from "react-icons/hi2";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { candidateSliceAction } from "./candidateSlice";
import axios from "axios";
import { headerSliceAction } from "../../components/Header/headerSlice";

const CandidateProfile = () => {
  const { candidateInfo } = useSelector((store) => store.Candidate);
  const [showEdit, setShowEdit] = useState(false);
  const [showPicEdit, setShowPicEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  })

  const handleHideEdit = () => {
    setShowEdit(false);
  };

  const handleShowEdit = () => {
    setShowEdit(true);
  };

  const showPicSaveBTN = () => {
    setShowPicEdit(true);
  };

  const hidePicSaveBTN = () => {
    setShowPicEdit(false);
  };

  const handleProfileChange = async (e) => {
    e.preventDefault();
    hidePicSaveBTN();
    const res = await axios.post(
      "http://localhost:8080/changeprofilepic",
      e.currentTarget,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    
    if (res.status) {
      dispatch(headerSliceAction.setLoginInfo({img: res.data.img}));
      dispatch(candidateSliceAction.setCandidateInfo({img:res.data.img}));
    } 
  };

  const handleCandidateUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      education: form.education.value,
      location: form.location.value,
      field: form.field.value,
      englvl: form.englvl.value,
      experience: form.experience.value,
      shift: Array.from(form.shift)
        .filter((cbox) => cbox.checked)
        .map((cbox) => cbox.value),
      workplace: Array.from(form.workplace)
        .filter((cbox) => cbox.checked)
        .map((cbox) => cbox.value),
      emptype: Array.from(form.emptype)
        .filter((cbox) => cbox.checked)
        .map((cbox) => cbox.value),
      jobtitle: form.jobtitle.value,
    };

    

    const res = await axios.patch(
      "http://localhost:8080/updatecanddetails",
      formData,
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    if (res.data.status) {
      dispatch(candidateSliceAction.setCandidateInfo(res.data.data));
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setShowEdit(false);
  };

  return (
    <>
      <section className="w-full bg-faintGray flex justify-center items-center py-20">
        {showEdit ? (
          <div className="bg-white p-5 rounded-lg space-y-3 md:w-[60vw] lg:w-[40vw] border border-slate-300 shadow-xl relative">
            <button
              className="py-2 px-7 bg-red-600 text-white font-semibold rounded-lg absolute top-4 right-4"
              onClick={handleHideEdit}
            >
              Cancel
            </button>
            <form onSubmit={handleCandidateUpdate}>
              <h1 className="text-3xl font-semibold mb-5">Fill Details</h1>
              <hr />

              <div className="space-y-8 ">
                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold ">Education</h1>
                  <select
                    name="education"
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                    defaultValue={candidateInfo.education}
                  >
                    <option value="No Education">No Education</option>
                    <option value="10th Pass">10th Pass</option>
                    <option value="12th Pass">12th Pass</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bihar">Bihar</option>
                    <option value="ITI">ITI</option>
                    <option value="Graduate">Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold ">Location</h1>
                  <select
                    name="location"
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                    defaultValue={candidateInfo.location}
                  >
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                    <option value="Andaman and Nicobar">
                      Andaman and Nicobar
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="International">International</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold ">Skill (Field)</h1>
                  <select
                    name="field"
                    defaultValue={candidateInfo.field}
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  >
                    <option value="Other">Other</option>
                    <option value="Driving">Driving</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Healthcare">HealthCare</option>
                    <option value="Computer">Computer</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Security Operation">
                      Security Operation
                    </option>
                    <option value="Sales">Sales</option>
                    <option value="Accounting">Accounting</option>
                  </select>
                </div>

                <div className="flex flex-col gap-4">
                  <h1 className="text-lg font-semibold">Language</h1>
                  <div className="flex flex-col gap-4 text-base">
                    <div className="flex items-center gap-2 text-base">
                      <input
                        type="radio"
                        name="englvl"
                        id="noEnglish"
                        value="No English"
                        defaultChecked={candidateInfo.englvl === "No English"}
                      />
                      <label
                        htmlFor="noEnglish"
                        className="text-base font-semibold opacity-80"
                      >
                        No English
                      </label>
                    </div>
                    <div className="flex items-start gap-2 text-base">
                      <input
                        type="radio"
                        name="englvl"
                        id="basicEnglish"
                        className="mt-2"
                        value="Basic"
                        defaultChecked={candidateInfo.englvl === "Basic"}
                      />
                      <label htmlFor="basicEnglish">
                        <div>
                          <h1 className="text-base font-semibold opacity-80">
                            Basic
                          </h1>
                          <p className="text-sm opacity-90">
                            You can understand/speak basic sentences
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-start gap-2 text-base">
                      <input
                        type="radio"
                        name="englvl"
                        id="interEnglish"
                        className="mt-2"
                        value="Intermediate"
                        defaultChecked={candidateInfo.englvl === "Intermediate"}
                      />
                      <label htmlFor="interEnglish">
                        <div>
                          <h1 className="text-base font-semibold opacity-80">
                            Intermediate
                          </h1>
                          <p className="text-sm opacity-90">
                            You can have a conversation in English on some
                            topics
                          </p>
                        </div>
                      </label>
                    </div>
                    <div className="flex items-start gap-2 text-base">
                      <input
                        type="radio"
                        name="englvl"
                        id="adEnglish"
                        className="mt-2"
                        value="Advanced"
                        defaultChecked={candidateInfo.englvl === "Advanced"}
                      />
                      <label htmlFor="adEnglish">
                        <div>
                          <h1 className="text-base font-semibold opacity-80">
                            Advanced
                          </h1>
                          <p className="text-sm opacity-90">
                            You can do your entire job in English and speak
                            fluently
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-semibold ">Experience</h1>
                  <select
                    name="experience"
                    defaultValue={candidateInfo.experience}
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  >
                    <option value="Fresher">Fresher</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Year">2 Year</option>
                    <option value="3 Year">3 Year</option>
                    <option value="5 Year">5 Year</option>
                    <option value="5+ YearS">5+ YearS</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-semibold">Preferred Shifts</h1>
                  <div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="shift"
                        id="ns"
                        value="Night Shift"
                        defaultChecked={candidateInfo.shift.includes(
                          "Night Shift"
                        )}
                      />
                      <label
                        htmlFor="ns"
                        className="text-base font-semibold opacity-70"
                      >
                        Night Shift
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="shift"
                        id="ds"
                        value="Day Shift"
                        defaultChecked={candidateInfo.shift.includes(
                          "Day Shift"
                        )}
                      />
                      <label
                        htmlFor="ds"
                        className="text-base font-semibold opacity-70 "
                      >
                        Day Shift
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-semibold ">
                    Preferred Workplace
                  </h1>
                  <div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="workplace"
                        id="wfh"
                        value="Work from Home"
                        defaultChecked={candidateInfo.workplace.includes(
                          "Work from Home"
                        )}
                      />
                      <label
                        htmlFor="ns"
                        className="text-base font-semibold opacity-70 "
                      >
                        Work from Home
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="workplace"
                        id="wfo"
                        value="Work from Office"
                        defaultChecked={candidateInfo.workplace.includes(
                          "Work from Office"
                        )}
                      />
                      <label
                        htmlFor="ns"
                        className="text-base font-semibold opacity-70 "
                      >
                        Work from Office
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="workplace"
                        id="fj"
                        value="Field Job"
                        defaultChecked={candidateInfo.workplace.includes(
                          "Field Job"
                        )}
                      />
                      <label
                        htmlFor="ns"
                        className="text-base font-semibold opacity-70 "
                      >
                        Field Job
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-semibold ">
                    Preferred Employment Type
                  </h1>
                  <div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="emptype"
                        id="ft"
                        value="Full Time"
                        defaultChecked={candidateInfo.emptype.includes(
                          "Full Time"
                        )}
                      />
                      <label
                        htmlFor="ft"
                        className="text-base font-semibold opacity-70 "
                      >
                        Full Time
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        name="emptype"
                        id="pt"
                        value="Part Time"
                        defaultChecked={candidateInfo.emptype.includes(
                          "Part Time"
                        )}
                      />
                      <label
                        htmlFor="pt"
                        className="text-base font-semibold opacity-70 "
                      >
                        Part Time
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h1 className="text-lg font-semibold ">
                    What job title/role are you looking for?.
                  </h1>
                  <input
                    type="text"
                    name="jobtitle"
                    defaultValue={candidateInfo.jobtitle}
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  />
                </div>

                <input
                  type="submit"
                  value="Update Details"
                  className="bg-faintGreen w-full p-3 rounded-lg text-white font-semibold text-lg"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4">
              <div className="p-9 bg-white rounded-xl flex gap-8">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-contain">
                    <img
                      src={`http://localhost:8080/Upload/${
                        candidateInfo.img
                      }?n=${Date.now()}`}
                      alt="PP"
                      className="w-full h-full"
                    />
                  </div>
                  <form
                    className="flex flex-col gap-3"
                    encType="multipart/form-data"
                    onSubmit={handleProfileChange}
                  >
                    <label
                      htmlFor="pic"
                      className="text-sm font-semibold opacity-90 text-faintGreen cursor-pointer"
                      onClick={showPicSaveBTN}
                    >
                      Change Photo
                    </label>
                    <input
                      type="text"
                      name="imgname"
                      defaultValue={candidateInfo.id}
                      className="hidden"
                      readOnly
                    />
                    <input
                      type="file"
                      name="candpp"
                      id="pic"
                      className="hidden"
                    />
                    {showPicEdit && (
                      <button
                        type="submit"
                        className="py-1 px-3 bg-faintGreen rounded-lg outline-none border border-slate-300 text-whiten text-white"
                      >
                        Save
                      </button>
                    )}
                  </form>
                </div>
                <div className="flex flex-col">
                  <h1 className="font-semibold text-lg">
                    {candidateInfo.candname}
                  </h1>
                  <div className="flex items-center gap-2 opacity-70 font-semibold mt-2">
                    <HiAcademicCap className="opacity-90" />{" "}
                    {candidateInfo.education}
                  </div>
                  <div className="flex items-center gap-2 opacity-70  font-semibold">
                    <IoLocationSharp className="opacity-90" />{" "}
                    {candidateInfo.location}
                  </div>
                </div>
              </div>
              <div className="p-9 bg-white rounded-xl grid grid-cols-2 gap-y-6 gap-x-9">
                <div>
                  <div className="text-sm opacity-60 font-semibold">
                    Contact mail
                  </div>
                  <div className="font-semibold opacity-85">
                    {candidateInfo.contactmail}
                  </div>
                </div>
                <div>
                  <div className="text-sm opacity-60 font-semibold">
                    Date of birth
                  </div>
                  <div className="font-semibold opacity-85">
                    {candidateInfo.dob}
                  </div>
                </div>
                <div>
                  <div className="text-sm opacity-60 font-semibold">Gender</div>
                  <div className="font-semibold opacity-85">
                    {candidateInfo.gender}
                  </div>
                </div>
                <div>
                  <div className="text-sm opacity-60 font-semibold">
                    Current Location
                  </div>
                  <div className="font-semibold opacity-85">
                    {candidateInfo.location}
                  </div>
                </div>
              </div>
            </div>

            <div className="py-7 px-4 md:p-9 bg-white rounded-xl flex flex-col gap-8 relative">
              <button
                className="absolute top-4 right-4 z-20 flex gap-1 items-center font-semibold text-faintGreen"
                onClick={handleShowEdit}
              >
                <FaPen className="text-xs" />
                Edit
              </button>
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">Job Role</h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">Job title :</div>
                  <div className="opacity-95">{candidateInfo.jobtitle}</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Work Experience
                </h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">Total Years of experience :</div>
                  <div className="opacity-95">{candidateInfo.experience}</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Education{" "}
                </h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">Highest education :</div>
                  <div className="opacity-95">{candidateInfo.education}</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">Field </h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">Work Field :</div>
                  <div className="opacity-95">{candidateInfo.field}</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">Language</h1>
                <div className="flex justify-between md:gap-24 pl-4 font-semibold border border-slate-300 p-2 rounded-xl text-sm md:text-base">
                  <div className="opacity-70">English Skills :</div>
                  <div className="opacity-95">{candidateInfo.englvl}</div>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Prefered Shifts{" "}
                </h1>
                <div className="flex gap-3">
                  {candidateInfo.shift.map((shift, ind) => (
                    <div
                      className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold"
                      key={ind}
                    >
                      {shift}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base">
                  Preferred Workplace{" "}
                </h1>
                <div className="flex gap-3">
                  {candidateInfo.workplace.map((wp, ind) => (
                    <div
                      className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold"
                      key={ind}
                    >
                      {wp}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="font-semibold md:text-lg text-base ">
                  Preferred Employment Type
                </h1>
                <div className="flex gap-3">
                  {candidateInfo.emptype.map((type, ind) => (
                    <div
                      className="bg-faintGreen text-white px-2 py-1 rounded-lg text-xs md:text-sm font-semibold "
                      key={ind}
                    >
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CandidateProfile;
