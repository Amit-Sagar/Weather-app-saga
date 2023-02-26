import { call, put, takeEvery, select } from "redux-saga/effects";
import { getReportSuccess } from "../slices/weatherSlice";
import { selectLatLong } from "../slices/latLongSlice";

function* getWeatherReport() {
  let latLong = yield select(selectLatLong);
  const report = yield call(() =>
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latLong.latitude}&longitude=${latLong.longitude}&hourly=temperature_2m`
    )
  );
  const fomattedReport = yield report.json();
  yield put(getReportSuccess(fomattedReport));
}

function* weatherSaga() {
  yield takeEvery("report/getReportFetch", getWeatherReport);
}

export default weatherSaga;
