import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "../components/Header/headerSlice";

const store = configureStore({
  reducer: {
    Header: headerSlice.reducer,
  },
});

export default store;
