import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "Jobs",
  initialState: { jobs: [] },
  reducers: {
    setJobs: (store, action) => {
      store.jobs = [...store.jobs, ...action.payload];
    },
    setJobsEmpty: (store, action) => {
      store.jobs = [];
    },
  },
});

export const jobsSliceAction = jobsSlice.actions;
export default jobsSlice;
