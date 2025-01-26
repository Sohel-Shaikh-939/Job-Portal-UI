import { useState } from "react";
import { useSelector } from "react-redux";

const EmployerProfile = () => {

    const [showSave, setShowSave] = useState(false);
    const data = useSelector(store => store.Candidate);
    console.log(data)
    
    return (
      <>
        <section className="w-full flex justify-center items-center p-8">
          <div className="bg-white p-8 rounded-md border border-slate-300 flex flex-col gap-6 w-full lg:w-[45%]">
            <h1 className="font-bold text-2xl opacity-75">
              Profile
            </h1>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold text-xl opacity-75">
                Basic Details
              </h2>
              <form action="" className="flex flex-col gap-3">
                <div className="space-y-2">
                  <h1>Your Name</h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400 w-full text-lg font-semibold opacity-75 leading-10"
                    readOnly={!showSave}
                  />
                </div>
                <div className="space-y-2">
                  <h1>Company Name</h1>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400 w-full text-lg font-semibold opacity-75 leading-10"
                    readOnly={!showSave}
                  />
                </div>

                {showSave && (
                  <input
                    type="submit"
                    value="Save"
                    className="bg-faintGreen w-full p-3 rounded-lg text-white font-semibold text-lg mt-5"
                  />
                )}
              </form>
              {!showSave && (
                <button
                  className="bg-faintGreen w-full p-3 rounded-lg text-white font-semibold text-lg mt-5"
                  onClick={() => {
                    setShowSave(true);
                  }}
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </section>
      </>
    );
}

export default EmployerProfile;