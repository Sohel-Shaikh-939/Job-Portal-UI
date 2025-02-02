import { createSlice } from "@reduxjs/toolkit";

const employerProfileSlice = createSlice({
  name: "EmployerProfile",
  initialState: { employerInfo: {} },
  reducers: {
    setEmployerInfo: (store, action) => {
      store.employerInfo = {...store.employerInfo, ...action.payload};
    },
  },
});

export const employerProfileSliceAction = employerProfileSlice.actions;
export default employerProfileSlice;
