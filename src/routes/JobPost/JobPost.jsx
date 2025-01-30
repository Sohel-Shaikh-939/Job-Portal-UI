import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { homeSliceAction } from "../Home/homeSlice";

const JobPost = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {employerInfo} = useSelector(store => store.EmployerProfile);

  const handleJobPost = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      jtitle: form.jtitle.value,
      compname: employerInfo.compname,
      minsal: form.minsal.value,
      maxsal: form.maxsal.value,
      gender: form.gender.value,
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
      jobdesc: form.jobdesc.value,
    };
    const res = await axios.post(
      "http://localhost:8080/postjob",
      formData,
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: localStorage.getItem("auth"),
        },
      }
    );

    if(res.data.status) dispatch(homeSliceAction.setRepaint());
    navigate("/Employer/EmployerJobsList");
  }

    return (
      <>
        <section className="w-full bg-faintGray p-4 md:py-10 flex justify-center">
          <div className="bg-white p-5 rounded-lg space-y-3 md:w-[60vw] lg:w-[40vw] border border-slate-300 shadow-xl relative">
            <Link
              to="/Employer/EmployerJobsList"
              className="md:py-2 md:px-7 py-1 px-3 bg-red-600 text-white font-semibold rounded-lg absolute top-8 md:top-4 right-4"
            >
              Cancel
            </Link>
            <form onSubmit={handleJobPost}>
              <h1 className="md:text-3xl text-2xl font-semibold mb-4">
                Fill Details
              </h1>
              <hr />

              <div className="space-y-8">
                <div className="flex flex-col border-black gap-2">
                  <h1 className="text-lg font-semibold ">Job title</h1>
                  <input
                    type="text"
                    name="jtitle"
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                    required
                  />
                </div>

                <div className="flex flex-col border-black gap-2">
                  <h1 className="text-lg font-semibold ">Salary</h1>
                  <div className="flex justify-between md:flex-row flex-col gap-4 md:gap-0">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="min"
                        className="font-semibold opacity-80 text-sm"
                      >
                        Min.
                      </label>
                      <input
                        type="number"
                        name="minsal"
                        id="min"
                        className="py-1 px-4 border border-slate-400 rounded-md outline-faintGreen "
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="max"
                        className="font-semibold opacity-80 text-sm"
                      >
                        Max.
                      </label>
                      <input
                        type="number"
                        name="maxsal"
                        id="max"
                        className="py-1 px-4 border border-slate-400 rounded-md outline-faintGreen "
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold ">Gender</h1>
                  <div>
                    <div className="flex items-center gap-2 text-base">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        value="Male"
                        required
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        value="Female"
                        required
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                      <input
                        type="radio"
                        name="gender"
                        id="any"
                        value="Any Gender"
                        required
                      />
                      <label htmlFor="any">Any Gender</label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold ">Education</h1>
                  <select
                    name="education"
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                    required
                  >
                    <option value="No Education">No Education</option>
                    <option value="10th Pass">10th Pass</option>
                    <option value="12th Pass">12th Pass</option>
                    <option value="Diploma">Diploma</option>
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
                    required
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
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                    required
                  >
                    <option value="Other">Any</option>
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
                        required
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
                        required
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
                        required
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
                        required
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
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                    required
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
                      />
                      <label
                        htmlFor="ns"
                        className="text-base font-semibold opacity-70 "
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
                      />
                      <label
                        htmlFor="wfh"
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
                      />
                      <label
                        htmlFor="wfo"
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
                      />
                      <label
                        htmlFor="fj"
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

                <div className="w-full flex flex-col gap-3">
                  <h1 className="text-lg font-semibold ">Job Description</h1>
                  <textarea
                    name="jobdesc"
                    className="w-full border border-slate-400 rounded-md outline-faintGreen p-1"
                  ></textarea>
                </div>

                <input
                  type="submit"
                  value="Post Job"
                  className="bg-faintGreen w-full p-3 rounded-lg text-white font-semibold text-lg"
                />
              </div>
            </form>
          </div>
        </section>
      </>
    );
}

export default JobPost;