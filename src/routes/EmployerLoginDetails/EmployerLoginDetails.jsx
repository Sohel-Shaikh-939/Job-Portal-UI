import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { homeSliceAction } from "../Home/homeSlice";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

const EmployerLoginDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const formData = {
      empname: form.empname.value,
      compname: form.compname.value,
    };
    const res = await axios.post(
      "http://localhost:8080/employerdetails",
      formData,
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    setLoading(false);
    if (res.data.status) {
      dispatch(homeSliceAction.setRepaint())
      navigate("/Employer");
    } else {
      navigate("/");
    }
  }

    return (
      <>
        <section className="bg-faintGray w-full min-h-[90vh] flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="bg-white p-5 rounded-lg space-y-3 md:w-[60vw] lg:w-[40vw] border border-slate-300 shadow-xl">
              <h1 className="text-3xl font-semibold">Fill Details</h1>
              <hr />

              <div className="space-y-8 ">
                <div className="flex flex-col border-black gap-2">
                  <h1 className="text-lg font-semibold ">Name</h1>
                  <input
                    type="text"
                    name="empname"
                    placeholder="enter your name"
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  />
                </div>

                <div className="flex flex-col border-black gap-2">
                  <h1 className="text-lg font-semibold ">
                    Enter the name of your company
                  </h1>
                  <input
                    type="text"
                    name="compname"
                    placeholder="eg. Swiggy"
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  />
                </div>

                {/* <div className="flex flex-col border-black gap-2">
                  <h1 className="text-lg font-semibold ">
                    Number of employees in your company
                  </h1>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400"
                  />
                </div> */}
                <button
                  type="submit"
                  value="Create Account"
                  className="relative bg-faintGreen w-full min-h-16 p-3 rounded-lg text-white font-semibold text-lg"
                >
                  {loading ? (
                    <div
                      className={`${
                        loading ? "absolute" : "hidden"
                      } z-50 bg rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0 `}
                    >
                      <Spinner />
                    </div>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>
            </div>
          </form>
        </section>
      </>
    );
}

export default EmployerLoginDetails;