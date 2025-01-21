import { useEffect } from "react";
import { employerSliceAction } from "../Employer/employerSlice";
import { useDispatch } from "react-redux";

const EmployerInterested = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employerSliceAction.setSelectedEmployerPage("interested"));
  }, []);

  return (
    <>
      <h1>EmployerInterested</h1>
    </>
  );
};

export default EmployerInterested;
