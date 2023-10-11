
import React from "react";
import Chart from "chart.js/auto";
import { Line    } from "react-chartjs-2";

const labels = ["", "", "", "", "", ""];

const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)",
      data: [100, 10, 5, 2, 20, 30, 45], 

      fill:"3"
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line   e   data={data} />
    </div>
  );
};

export default LineChart;