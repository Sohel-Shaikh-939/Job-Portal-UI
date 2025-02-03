import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "Header",
  initialState: {
    isInEmployerSection: false,
    showEmployerOpt: false,
    loginInfo: {
      role: "",
      Authenticated: false,
      name:"",
      mail:"",
      img:"",
    },
    loading: true,
  },
  reducers: {
    setIsInEmployerSection: (store, action) => {
      store.isInEmployerSection = action.payload;
    },
    setShowEmployerOpt: (store, action) => {
      store.showEmployerOpt = action.payload;
    },
    setLoginInfo: (store, action) => {
      store.loginInfo = {...store.loginInfo, ...action.payload};
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
  },
});

export const headerSliceAction = headerSlice.actions;
export default headerSlice;
