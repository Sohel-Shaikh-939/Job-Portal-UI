import { useEffect } from "react";
import { employerSliceAction } from "../Employer/employerSlice";
import { useDispatch } from "react-redux";

const EmployerCandidates = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(employerSliceAction.setSelectedEmployerPage("candidates"));
    }, []);

  return (
    <>
      <h1>EmployerCandidates</h1>
    </>
  );
};

export default EmployerCandidates;
