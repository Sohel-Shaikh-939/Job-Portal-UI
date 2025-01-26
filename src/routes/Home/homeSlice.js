import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "Home",
  initialState: { authenticated: false },
  reducers: {
    setAuthenticated: (store, action) => {
      store.authenticated = action.payload;
    },
  },
});

export const homeSliceAction = homeSlice.actions;
export default homeSlice;
