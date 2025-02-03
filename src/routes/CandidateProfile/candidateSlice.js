import { createSlice } from "@reduxjs/toolkit";

const candidateSlice = createSlice({
  name: "Candidate",
  initialState: {candidateInfo:{}},
  reducers: {
    setCandidateInfo: (store, action) => {
      store.candidateInfo = {...store.candidateInfo, ...action.payload};
    },
  },
});

export const candidateSliceAction = candidateSlice.actions;
export default candidateSlice;
