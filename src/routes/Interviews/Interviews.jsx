import { useEffect } from "react";
import { employerSliceAction } from "../Employer/employerSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoCopyOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { homeSliceAction } from "../Home/homeSlice";

const Interviews = () => {
  const dispatch = useDispatch();
  const { employerInfo } = useSelector((store) => store.EmployerProfile);

  useEffect(() => {
    dispatch(employerSliceAction.setSelectedEmployerPage("Interviews"));
  }, []);

  const handleDeleteNotification = async (jid) => {
    // setLoading(true);
    const res = await axios.delete(
      `http://localhost:8080/deleteinterviewnotification/${jid}`,
      {
        headers: {
          "Content-Type": "Application/json",
          Authorization: localStorage.getItem("auth"),
        },
      }
    );
    if (res.data.status) {
      dispatch(employerSliceAction.setCurrentPage("Interviews"));
      dispatch(homeSliceAction.setRepaint());
    }
  };

  return (
    <>
      <div className="p-5 space-y-5 w-full bg-[#F3F2EF]">
        <h1 className="text-3xl font-semibold opacity-80">
          Upcoming Interviews ({employerInfo.interviews.length})
        </h1>
        <div>
          <div className="flex flex-wrap justify-center items-start gap-4 lg:justify-start">
            {employerInfo.interviews.length ? (
              employerInfo.interviews.map((interview, ind) => (
                <div
                  className="flex flex-col gap-4 bg-white p-4 md:p-12 border border-slate-400 rounded-lg w-fit shadow-xl relative"
                  key={ind}
                >
                  <div className="flex gap-4">
                    <div className="w-16 h-16 overflow-hidden rounded-lg">
                      <img
                        src={`http://localhost:8080${interview.candimg}`}
                        alt=""
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-1 font-semibold">
                      <div className="flex gap-2">
                        <div className="font-semibold">Name : </div>
                        <div className="opacity-80">{interview.candname}</div>
                      </div>
                      <div className="flex gap-2">
                        <div>Applied for : </div>
                        <div className="opacity-80">{interview.jobrole}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-full border border-slate-300 mb-3"></div>
                    <div className="text-base md:text-md font-bold opacity-65">
                      Contact mail
                    </div>
                    <div className="w-full bg-faintGray rounded-md p-1 flex justify-between items-center flex-wrap">
                      <div className="text-base font-semibold px-2">
                        {interview.contmail}
                      </div>
                      <button
                        className="p-1 bg-white border border-slate-500 rounded-md hover:scale-110 transition-all duration-300"
                        value={interview.contmail}
                        //   onClick={handleCopy}
                      >
                        <IoCopyOutline value="xyz.com" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="w-full border border-slate-300 mb-3"></div>
                    <h1 className="font-semibold opacity-80">
                      Interview Details
                    </h1>
                    <div>
                      <div className="flex gap-2 font-semibold">
                        <div>Date : </div>
                        <div className="opacity-85 text-yellow-700">
                          {new Date(interview.date).toDateString()}
                        </div>
                      </div>
                      <div className="flex gap-2 font-semibold">
                        <div>Time : </div>
                        <div className="opacity-85 text-faintGreen">
                          {new Date(
                            `${interview.date}T${interview.time}`
                          ).toLocaleTimeString()}
                        </div>
                      </div>
                      <div className="flex gap-2 font-semibold">
                        <div>Location : </div>
                        <div className="opacity-85 text-red-500 min-w-40 max-w-40 text-wrap">
                          {interview.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {new Date(`${interview.date}T${interview.time}`) <
                    new Date() && (
                    <div
                      className="cursor-pointer border border-slate-400 p-2 h-fit w-fit rounded-md absolute top-2 right-3"
                      onClick={() => {
                        handleDeleteNotification(interview.id);
                      }}
                    >
                      <MdDelete className="text-red-600" />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-3xl font-bold opacity-65">
                There are No Upcoming Interviews
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Interviews;
