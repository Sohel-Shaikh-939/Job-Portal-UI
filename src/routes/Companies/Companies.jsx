import { useEffect, useRef, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import tmp from "../../assets/logo.webp";
import { companiesSliceAction } from "./companiesSlice";
import { useDispatch, useSelector } from "react-redux";
import { companySliceAction } from "../Company/companySlice";
import { useNavigate } from "react-router-dom";

const Companies = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { companies } = useSelector((store) => store.Companies);
  const [noMore, setNoMore] = useState(false);
  const page = useRef(1);
  const company = useRef("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    page.current = 1;
    async function data() {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/searchcompany?page=${page.current}&company=${company.current}`
      );

      if (res.data.status) {
        dispatch(companiesSliceAction.setCompanies(res.data.data));
      }
      setLoading(false);
    }
    if (!companies.length) {
      data();
    }
  }, []);

  const handleLoadMore = async () => {
    page.current++;
    setLoading(true);
    const res = await axios.get(
      `http://localhost:8080/searchcompany?page=${page.current}&company=${company.current}`
    );
    if (!res.data.count) {
      setNoMore(true);
    }
    if (res.data.status) {
      dispatch(companiesSliceAction.setCompanies(res.data.data));
    }
    setLoading(false);
  };

  const handleCompanySearch = (e) => {
    e.preventDefault();
    company.current = e.target.company.value;
    dispatch(companiesSliceAction.setCompaniesEmpty([]));
    setNoMore(false);
    page.current = 0;
    handleLoadMore();
  };

  const handleShowCompanyDesc = (company) => {
      dispatch(companySliceAction.setCompany(company));
      navigate("/company");
    };

  return (
    <>
      <div className="min-h-[80vh]">
        {loading ? (
          <div className="min-h-[80vh] flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <>
            <div className="m-auto flex justify-center items-center p-8">
              <form
                className="w-full flex justify-center items-center"
                onSubmit={handleCompanySearch}
              >
                <div className="border border-slate-400 rounded-md gap-4 md:gap-0  min-w-[70%] flex flex-col md:flex-row justify-between items-center p-2">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className=" outline-none p-2 md:w-[60%] text-center  font-semibold"
                  />
                  <input
                    type="submit"
                    value="Search company"
                    className="text-white py-2 px-8
                 bg-faintGreen  rounded  text-md font-semibold cursor-pointer"
                  />
                </div>
              </form>
            </div>
            <div className="m-auto h-full flex flex-col items-center gap-7 mb-7">
              <h1 className="font-semibold text-3xl">Companies</h1>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {companies.map((company, ind) => (
                  <div
                    className="border border-slate-300 rounded-lg p-7 space-y-4 shadow-xl min-w-[300px] md:min-w-[270px] cursor-pointer hover:scale-105 transition"
                    key={ind}
                    onClick={() => {
                      handleShowCompanyDesc(company);
                    }}
                  >
                    <div className="flex items-center gap-5 ">
                      <div className="w-14 h-14 rounded-lg overflow-hidden ">
                        <img
                          src={`http://localhost:8080${company.compimg}`}
                          alt="Company Image"
                          className=" h-full w-full"
                        />
                      </div>
                      <div className="font-semibold opacity-60">
                        {company.compname}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="font-bold">HR :</div>
                      <div className="font-semibold  opacity-65">
                        {company.empname}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        <div className="mb-5">
          {noMore ? (
            <div className="py-4 px-7 bg-faintGreen rounded-md hover:scale-105 text-white text-xl font-semibold m-auto w-fit transition-all duration-300">
              No More Jobs
            </div>
          ) : (
            <div
              className="py-4 px-7 bg-faintGreen rounded-md hover:scale-105 text-white text-xl font-semibold m-auto w-fit transition-all duration-300 min-w-36 relative min-h-16"
              onClick={handleLoadMore}
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
                "Load More"
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Companies;
