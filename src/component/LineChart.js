import React from "react";
import {
  AreaChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";

const LineChartComponent = () => {
  const data = [
    { name: "January", value: 5 },
    { name: "February", value: 0 },
    { name: "March", value: 5 },
    { name: "April", value: 0 },
    { name: "May", value: 5 },
    { name: "May", value: 1 },
    { name: "May", value: 5 },
  ];

  return (
    <div>
      <AreaChart width={400} height={80} data={data}>
        {/* <CartesianGrid strokeDasharray="30 25" /> */}

        <Area 
          type="monotone"
          dataKey="value"
          stroke="#8884d8" 
          activeDot={{ stroke: 'red', strokeWidth: 2, r: 10 }} 
        />
      </AreaChart>
    </div>
  );
};

export default LineChartComponent;
