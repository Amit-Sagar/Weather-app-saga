import Hero from "./components/Hero";
import WeatherChart from "./components/WeatherChart";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getReportFetch } from "./redux/slices/weatherSlice";
import { selectLatLong } from "./redux/slices/latLongSlice";

function App() {
  const weatherReport = useSelector((state) => state.weather.report);
  const latLong = useSelector(selectLatLong);
  const dispatch = useDispatch();
  const [cordinates, setCordinates] = useState({
    lat: latLong?.latitude,
    long: latLong?.longitude,
  });
  useEffect(() => {
    dispatch(getReportFetch());
  }, [dispatch, latLong]);
  return (
    <div>
      <Hero cordinates={cordinates} setCordinates={setCordinates} />
      <WeatherChart report={weatherReport} />
    </div>
  );
}

export default App;
