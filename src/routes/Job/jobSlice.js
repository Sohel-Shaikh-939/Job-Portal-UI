import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "Jobs",
  initialState: { job: {} },
  reducers: {
    setJob: (store, action) => {
      store.job = action.payload;
    },
  },
});

export const jobSliceAction = jobSlice.actions;
export default jobSlice;
