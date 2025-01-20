const CandidateLoginDetails = () => {
    return (
      <>
        <section className="w-full bg-faintGray p-4 md:py-10 flex justify-center">
          <form action="">
            <div className="bg-white p-5 rounded-lg space-y-3 md:w-[60vw] lg:w-[40vw] border border-slate-300 shadow-xl">
              <h1 className="text-3xl font-semibold">Fill Details</h1>
              <hr />

              <div className="space-y-8 ">
                <div className="flex flex-col border-black">
                  <h1 className="text-lg font-semibold ">Name</h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="text-lg font-semibold ">
                    Date of Birth (DOB)
                  </h1>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold ">Gender</h1>
                  <div>
                    <div className="flex items-center gap-2 text-base">
                      <input type="radio" name="gender" id="male" />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                      <input type="radio" name="gender" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold ">Education</h1>
                  <select
                    name=""
                    id=""
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
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
                    name=""
                    id=""
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
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
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-lg font-semibold ">Skill (Field)</h1>
                  <select
                    name=""
                    id=""
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
                      <input type="radio" name="english" id="noEnglish" />
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
                        name="english"
                        id="basicEnglish"
                        className="mt-2"
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
                        name="english"
                        id="interEnglish"
                        className="mt-2"
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
                        name="english"
                        id="adEnglish"
                        className="mt-2"
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
                    name=""
                    id=""
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
                      <input type="checkbox" name="" id="ns" />
                      <label
                        htmlFor="ns"
                        className="text-base font-semibold opacity-70 "
                      >
                        Night Shift
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" name="" id="ds" />
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
                      <input type="checkbox" name="" id="wfh" />
                      <label
                        htmlFor="ns"
                        className="text-base font-semibold opacity-70 "
                      >
                        Work from Home
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" name="" id="wfo" />
                      <label
                        htmlFor="ns"
                        className="text-base font-semibold opacity-70 "
                      >
                        Work from Office
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" name="" id="fj" />
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
                      <input type="checkbox" name="" id="ft" />
                      <label
                        htmlFor="ft"
                        className="text-base font-semibold opacity-70 "
                      >
                        Full Time
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input type="checkbox" name="" id="pt" />
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
                    name=""
                    id=""
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  />
                </div>

                <input
                  type="submit"
                  value="Create Account"
                  className="bg-faintGreen w-full p-3 rounded-lg text-white font-semibold text-lg"
                />
              </div>
            </div>
          </form>
        </section>
      </>
    );
}

export default CandidateLoginDetails;