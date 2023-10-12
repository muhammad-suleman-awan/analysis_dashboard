import { red } from "@mui/material/colors";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
  Cell,
} from "recharts";
const TinyBarChart = () => {
  const data = [
    { name: "Category A", value: 30 },
    { name: "Category B", value: 20 },
    { name: "Category C", value: 30 },
    { name: "Category D", value: 18 },
    { name: " Category E", value: 15 },
    { name: "Category A", value: 10 },
    { name: "Category B", value: 20 },
    { name: "Category C", value: 30 },
    { name: "Category D", value: 30 },
    { name: " Category E", value: 15 },
    { name: " Category E", value: 15 },
    { name: "Category A", value: 10 },
    { name: "Category B", value: 20 },
    { name: "Category C", value: 30 },
    { name: "Category D", value: 10 },
    { name: " Category E", value: 15 },
    { name: "Category A", value: 10 },
    { name: "Category B", value: 20 },
    { name: "Category C", value: 30 },
    { name: "Category D", value: 10 },
    { name: " Category E", value: 15 },
    { name: "Category A", value: 10 },
    { name: "Category B", value: 20 },
    { name: "Category C", value: 30 },
    { name: "Category D", value: 10 },
    { name: " Category E", value: 30 },
  ];
  return (
    <>
      <BarChart width={400} height={80} data={data}>
        {/* <CartesianGrid strokeDasharray="2 3" /> */}
        <Tooltip
          angle={10}
          content={({ payload }) => <span className="bg-white px-1  rounded"> {`${payload[0]?.value}`}</span>}
          cursor={{ stroke: "#000", strokeWidth: 2 }}
        />
        <AreaChart dataKey="value" dot={false} />

        <Bar dataKey="value" fill="#8884d8" barSize={10} />
      </BarChart>
    </>
  );
};
export default TinyBarChart;
