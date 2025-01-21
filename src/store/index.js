import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../components/Header/headerSlice";
import employerSlice from "../routes/Employer/employerSlice";

const store = configureStore({
  reducer: {
    Header: headerSlice.reducer,
    Employer: employerSlice.reducer,
  },
});

export default store;
