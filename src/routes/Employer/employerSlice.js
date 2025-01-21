import { createSlice } from "@reduxjs/toolkit";

const employerSlice = createSlice({
  name: "Employer",
  initialState: { selectedEmployerPage: "jobs" },
  reducers: {
    setSelectedEmployerPage: (store, action) => {
      store.selectedEmployerPage = action.payload;
    },
  },
});

export const employerSliceAction = employerSlice.actions;
export default employerSlice;
