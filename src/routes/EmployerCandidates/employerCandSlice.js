import { createSlice } from "@reduxjs/toolkit";

const empCandidateSlice = createSlice({
  name: "EmpCandidate",
  initialState: { candidates: [] },
  reducers: {
    setCandidates: (store, action) => {
      store.candidates = [...store.candidates, ...action.payload];
    },
    setCandidatesEmpty: (store, action) => {
      store.candidates = [];
    },
  },
});

export const empCandidateSliceAction = empCandidateSlice.actions;
export default empCandidateSlice;
