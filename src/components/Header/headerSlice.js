import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "Header",
  initialState: { isInEmployerSection: false, showEmployerOpt: false },
  reducers: {
    setIsInEmployerSection: (store,action) => {
      store.isInEmployerSection = action.payload;
    },
    setShowEmployerOpt: (store,action) => {
      store.showEmployerOpt = action.payload;
    },
  },
});

export const headerSliceAction = headerSlice.actions;
export default headerSlice;
