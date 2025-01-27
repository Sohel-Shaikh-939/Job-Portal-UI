import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "Home",
  initialState: { authenticated: false , repaint: false},
  reducers: {
    setAuthenticated: (store, action) => {
      store.authenticated = action.payload;
    },
    setRepaint: (store) => {
      store.repaint = !store.repaint;
    }
  },
});

export const homeSliceAction = homeSlice.actions;
export default homeSlice;
