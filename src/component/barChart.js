
import React from "react";
import Chart from "chart.js/auto";
import { Bar    } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "blue",
      borderColor: "blue",
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