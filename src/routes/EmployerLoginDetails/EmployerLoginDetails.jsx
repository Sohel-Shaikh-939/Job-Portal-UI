import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployerLoginDetails = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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

    if (res.data.status) {
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

export default EmployerLoginDetails;