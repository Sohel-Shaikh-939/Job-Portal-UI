import { createSlice } from "@reduxjs/toolkit";

const companiesSlice = createSlice({
  name: "Companies",
  initialState: { companies: [] },
  reducers: {
    setCompanies: (store, action) => {
      store.companies = [...store.companies,...action.payload];
    },
    setCompaniesEmpty: (store) => {
      store.companies = [];
    },
  },
});

export const companiesSliceAction = companiesSlice.actions;
export default companiesSlice;
