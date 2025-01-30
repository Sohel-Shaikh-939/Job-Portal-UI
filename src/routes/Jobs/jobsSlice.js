import { createSlice } from "@reduxjs/toolkit";

const jobsSlice = createSlice({
  name: "Jobs",
  initialState: { jobs: [{}] },
  reducers: {
    setJobs: (store, action) => {
      store.jobs = action.payload;
    },
  },
});

export const jobsSliceAction = jobsSlice.actions;
export default jobsSlice;
