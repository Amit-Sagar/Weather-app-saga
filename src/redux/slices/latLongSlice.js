import { createSlice } from "@reduxjs/toolkit";

export const latLongSlice = createSlice({
  name: "latLong",
  initialState: {
    latitude: "52.52",
    longitude: "13.41",
  },
  reducers: {
    setLatLong: (state, action) => {
      state.latitude = action.payload?.lat;
      state.longitude = action.payload?.long;
    },
  },
});

export const { setLatLong } = latLongSlice.actions;

export const selectLatLong = (state) => state?.latLong;

export default latLongSlice.reducer;
