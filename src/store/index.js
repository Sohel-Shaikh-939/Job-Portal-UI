import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../components/Header/headerSlice";
import employerSlice from "../routes/Employer/employerSlice";
import homeSlice from "../routes/Home/homeSlice";
import candidateSlice from "../routes/CandidateProfile/candidateSlice";
import employerProfileSlice, { employerProfileSliceAction } from "../routes/EmployerProfile/employerProfileSlice";

const store = configureStore({
  reducer: {
    Header: headerSlice.reducer,
    Employer: employerSlice.reducer,
    Home: homeSlice.reducer,
    Candidate: candidateSlice.reducer,
    EmployerProfile: employerProfileSlice.reducer,
  },
});

export default store;
