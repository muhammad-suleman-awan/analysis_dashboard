
import React from "react";
import Chart from "chart.js/auto";
import { Bar    } from "react-chartjs-2";

const labels = ["", "", "", "", "", ""];

const data = {
  labels: labels,
  datasets: [
    {
      label: "",
      backgroundColor: "rgb(134,239,172)",
      borderColor: "rgb(134,239,172)",
      data: [100, 10, 5, 2, 20, 30, 45], 
      fill:"3"
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <Bar   e   data={data} />
    </div>
  );
};

export default BarChart;