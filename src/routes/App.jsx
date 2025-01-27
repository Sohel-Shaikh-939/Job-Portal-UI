import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { headerSliceAction } from "../components/Header/headerSlice";
import { useEffect } from "react";
import Spinner from "../components/Spinner/Spinner";
import { candidateSliceAction } from "./CandidateProfile/candidateSlice";
import { employerProfileSliceAction } from "./EmployerProfile/employerProfileSlice";

const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading} = useSelector(store => store.Header)
  const { loginInfo } = useSelector((store) => store.Header);
  const { repaint } = useSelector((store) => store.Home);

  useEffect(() => {
    (async function () {
      const res = await axios.post(
        "http://localhost:8080/auth",
        {},
        {
          headers: {
            Authorization: localStorage.getItem("auth"),
          },
        }
      );
      if (res.data.authenticated) {
        if (res.data.role === "candidate") {
          dispatch(
            headerSliceAction.setLoginInfo({
              role: res.data.role,
              Authenticated: res.data.authenticated,
              name: res.data.data.candname,
              mail: res.data.data.mail,
            })
          );
          dispatch(candidateSliceAction.setCandidateInfo(res.data.data));
        } else if (res.data.role === "employer") {
          dispatch(
            headerSliceAction.setLoginInfo({
              role: res.data.role,
              Authenticated: res.data.authenticated,
              name: res.data.data.empname,
              mail: res.data.data.mail,
            })
          );
          dispatch(employerProfileSliceAction.setEmployerInfo(res.data.data));
          navigate("/Employer/");
        }
        dispatch(headerSliceAction.setLoading(false));
      } else {
        dispatch(headerSliceAction.setLoading(false));
      }
    })();
  }, [loginInfo.Authenticated,repaint]);

  return (
    <>
      {loading ? (
        <div style={{height:"100vh"}}>
          <Spinner />
        </div>
      ) : (
        <>
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </>
      )}
    </>
  );
};
export default App;
