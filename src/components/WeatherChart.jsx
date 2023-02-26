import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import moment from "moment";

ChartJS.register(
  LineController,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Legend,
  Tooltip,
  Title
);

const WeatherChart = ({ report }) => {
  const time = report?.hourly?.time.map((item) =>
    moment(item).format("DD-MMM")
  );
  const data = {
    labels: time,
    datasets: [
      {
        label: "Temprature",
        data: report?.hourly?.temperature_2m,
        borderColor: "#EEBC1D",
        backgroundColor: "#EEBC1D",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temprature Chart",
      },
    },
  };
  return (
    <div className="mt-5 max-w-7xl mx-auto min-h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
