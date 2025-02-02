import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "SearchBar",
  initialState: { title:"",experience:"",location:"" ,inComponent: ""},
  reducers: {
    setSearch: (store, action) => {
      return (store = { ...store, ...action.payload });
    },
  },
});

export const searchBarSliceAction = searchBarSlice.actions;
export default searchBarSlice;
