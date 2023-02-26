import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import latLongReducer from "../slices/latLongSlice";
import weatherReducer from "../slices/weatherSlice";
import weatherSaga from "../saga/WeatherSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    latLong: latLongReducer,
    weather: weatherReducer,
  },
  middleware: [saga],
});

saga.run(weatherSaga);
export default store;
