import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../components/Header/headerSlice";
import employerSlice from "../routes/Employer/employerSlice";
import homeSlice from "../routes/Home/homeSlice";
import candidateSlice from "../routes/CandidateProfile/candidateSlice";
import employerProfileSlice, { employerProfileSliceAction } from "../routes/EmployerProfile/employerProfileSlice";
import jobsSlice from "../routes/Jobs/jobsSlice";
import jobSlice from "../routes/Job/jobSlice";
import searchBarSlice from "../components/SearchBar/searchBarSlice";
import empCandidateSlice from "../routes/EmployerCandidates/employerCandSlice";

const store = configureStore({
  reducer: {
    Header: headerSlice.reducer,
    Employer: employerSlice.reducer,
    Home: homeSlice.reducer,
    Candidate: candidateSlice.reducer,
    EmployerProfile: employerProfileSlice.reducer,
    Jobs: jobsSlice.reducer,
    Job: jobSlice.reducer,
    SearchBar: searchBarSlice.reducer,
    EmpCandidate: empCandidateSlice.reducer,
  },
});

export default store;
