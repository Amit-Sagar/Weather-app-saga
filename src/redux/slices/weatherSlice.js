import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "report",
  initialState: {
    report: null,
    isLoading: false,
  },
  reducers: {
    getReportFetch: (state) => {
      state.isLoading = true;
    },
    getReportSuccess: (state, action) => {
      state.report = action.payload;
      state.isLoading = false;
    },
    getReportFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getReportFetch, getReportSuccess, getReportFailure } =
  weatherSlice.actions;

export default weatherSlice.reducer;
