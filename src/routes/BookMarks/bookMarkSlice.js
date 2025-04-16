import { createSlice } from "@reduxjs/toolkit";

const bookMarkSlice = createSlice({
  name: "BookMark",
  initialState: { savedJobs: [] },
  reducers: {
    setBookMarks: (store, action) => {
      store.savedJobs = [...action.payload];
    },
  },
});

export const bookMarkSliceAction = bookMarkSlice.actions;
export default bookMarkSlice;
