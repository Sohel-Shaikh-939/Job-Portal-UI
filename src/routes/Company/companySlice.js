import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "Company",
  initialState: { company: {} },
  reducers: {
    setCompany: (store, action) => {
      store.company = action.payload;
    },
  },
});

export const companySliceAction = companySlice.actions;
export default companySlice;
