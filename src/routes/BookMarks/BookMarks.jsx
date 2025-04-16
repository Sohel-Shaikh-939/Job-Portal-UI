import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { bookMarkSliceAction } from "./bookMarkSlice";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import { jobSliceAction } from "../Job/jobSlice";
import { useNavigate } from "react-router-dom";

const BookMarks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { savedJobs } = useSelector((store) => store.BookMark);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    async function data() {
      let arr = JSON.parse(localStorage.getItem("bookmarks") || []);

      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/bookmarks?list=${arr.join(",")}`
      );
      if (res.data.status) {
        dispatch(bookMarkSliceAction.setBookMarks(res.data.data));
      }
      setLoading(false);
    }
    data();
  }, []);

  const handleShowJobDesc = (job) => {
    dispatch(jobSliceAction.setJob(job));
    navigate("/Job");
  };

  const handleDeleteBookMark = (id) => {
    let bm = localStorage.getItem("bookmarks");
    let arr = JSON.parse(bm);
    arr = arr.filter((jid) => jid !== id);
    localStorage.setItem("bookmarks", JSON.stringify(arr));
    dispatch(
      bookMarkSliceAction.setBookMarks(savedJobs.filter((job) => job.id !== id))
    );
  };

  return (
    <>
      {loading ? (
        <div className="min-h-[70vh] flex justify-center items-center  p-8 ">
          <Spinner />
        </div>
      ) : (
        <>
          {savedJobs.length ? (
            <div className="m-auto flex justify-center items-center md:py-9 font-semibold text-3xl opacity-75">
              Your BookMarks (Saved Jobs)
            </div>
          ) : (
            ""
          )}
          <div className="min-h-[70vh] grid md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 ">
            {savedJobs.length ? (
              savedJobs.map((job, ind) => (
                <div className="relative hover:scale-105 transition" key={ind}>
                  <div
                    className="px-2 py-7 bg-white rounded-2xl space-y-3 h-fit w-full min-w-fit overflow-hidden cursor-pointer shadow-2xl border border-slate-200 pl-8 "
                    onClick={() => {
                      handleShowJobDesc(job);
                    }}
                    key={ind}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden">
                        <img
                          src={`http://localhost:8080${job.compimg}`}
                          alt=""
                          className="h-full w-full"
                        />
                      </div>
                      <div>
                        <div className="text-lg font-semibold">
                          {job.jtitle}
                        </div>
                        <div className="text-sm opacity-60">{job.compname}</div>
                      </div>
                    </div>

                    <div className="pl-6">
                      <div className="opacity-60 flex items-center gap-2">
                        <IoLocationSharp className="opacity-80" />
                        {job.location}
                      </div>
                      <div className="opacity-60 flex items-center gap-2">
                        <GiMoneyStack className="opacity-90" />${job.minsal} - $
                        {job.maxsal} monthly
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {job.shift.map((shift, ind) => (
                        <div
                          className="bg-[#76767846] rounded-md px-2 py-1 text-xs opacity-65"
                          key={ind}
                        >
                          {shift}
                        </div>
                      ))}
                      <div className="bg-[#76767846] rounded-md px-2 py-1 text-xs opacity-65">
                        Min. {job.experience}
                      </div>
                    </div>
                  </div>
                  <div
                    className="cursor-pointer border border-slate-400 p-2 h-fit w-fit rounded-md absolute top-4 right-4"
                    onClick={() => {
                      handleDeleteBookMark(job.id);
                    }}
                  >
                    <MdDelete className="text-red-600" />
                  </div>
                </div>
              ))
            ) : (
              <div className="absolute top-[50%] left-[10%] md:left-[20%] lg:left-[35%] text-3xl font-bold opacity-65">
                There are No Saved Jobs
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default BookMarks;
