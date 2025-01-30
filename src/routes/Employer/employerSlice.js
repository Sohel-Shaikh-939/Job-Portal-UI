import { createSlice, current } from "@reduxjs/toolkit";

const employerSlice = createSlice({
  name: "Employer",
  initialState: { selectedEmployerPage: "jobs" ,currentPage: "jobs"},
  reducers: {
    setSelectedEmployerPage: (store, action) => {
      store.selectedEmployerPage = action.payload;
    },
    setCurrentPage: (store, action) => {
      store.currentPage = action.payload;
    },
  },
});

export const employerSliceAction = employerSlice.actions;
export default employerSlice;
