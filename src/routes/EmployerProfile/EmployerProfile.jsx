import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { employerProfileSliceAction } from "./employerProfileSlice";
import { headerSliceAction } from "../../components/Header/headerSlice";

const EmployerProfile = () => {
  const [showSave, setShowSave] = useState(false);
  const [showPicEdit, setShowPicEdit] = useState(false);
  const { employerInfo } = useSelector((store) => store.EmployerProfile);
  const dispatch = useDispatch();

  const handleUpdateEmpProfile = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      empname: form.empname.value,
      compname: form.compname.value,
    };

    const res = await axios.patch(
      "http://localhost:8080/updateempdetails",
      formData,
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    if (res.data.status) {
      dispatch(employerProfileSliceAction.setEmployerInfo(res.data.data));
      dispatch(headerSliceAction.setLoginInfo({ name: res.data.data.empname }));
    }
    setShowSave(false);
  };

  const handleProfileChange = async (e) => {
    e.preventDefault();
    hidePicSaveBTN();
    const res = await axios.post(
      "http://localhost:8080/changecompanypic",
      e.currentTarget,
      {
        headers: {
          Authorization: localStorage.getItem("auth"),
        },
      }
    );

    if (res.status) {
      dispatch(headerSliceAction.setLoginInfo({ img: res.data.img }));
      dispatch(employerProfileSliceAction.setEmployerInfo({ compimg: res.data.img }));
    }
  };

    const showPicSaveBTN = () => {
      setShowPicEdit(true);
    };

      const hidePicSaveBTN = () => {
        setShowPicEdit(false);
      };

  return (
    <>
      <section className="w-full flex justify-center items-center p-8">
        <div className="bg-white p-8 rounded-md border border-slate-300 flex flex-col gap-6 w-full lg:w-[45%]">
          <h1 className="font-bold text-2xl opacity-75">Profile</h1>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center gap-4">
              <div className="m-auto h-32 w-32 rounded-full overflow-hidden">
                <img
                  src={`http://localhost:8080/Upload/${
                    employerInfo.compimg
                  }?n=${Date.now()}`}
                  alt=""
                  className="h-full w-full"
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
                  defaultValue={employerInfo.id}
                  className="hidden"
                  readOnly
                />
                <input type="file" name="compic" id="pic" className="hidden" />
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

            <h2 className="font-semibold text-xl opacity-75">Basic Details</h2>
            <form
              onSubmit={handleUpdateEmpProfile}
              className="flex flex-col gap-3"
            >
              <div className="space-y-2">
                <h1>Your Name</h1>
                <input
                  type="text"
                  name="empname"
                  className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400 w-full text-lg font-semibold opacity-75 leading-10"
                  readOnly={!showSave}
                  defaultValue={employerInfo.empname}
                />
              </div>
              <div className="space-y-2">
                <h1>Company Name</h1>
                <input
                  type="text"
                  name="compname"
                  className="outline-faintGreen rounded-md py-1 px-4 border border-slate-400 w-full text-lg font-semibold opacity-75 leading-10"
                  readOnly={!showSave}
                  defaultValue={employerInfo.compname}
                />
              </div>

              {showSave && (
                <input
                  type="submit"
                  value="Save"
                  className="bg-faintGreen w-full p-3 rounded-lg text-white font-semibold text-lg mt-5 cursor-pointer"
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
};

export default EmployerProfile;
