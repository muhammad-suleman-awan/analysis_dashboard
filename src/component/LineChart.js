import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

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
    <div className="w-11/12 xl:w-25  lg:w-25 xl:w-full  ">
      <ResponsiveContainer width="100%" height={100}>
        <AreaChart data={data}>
          {/* Your chart components */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ stroke: "red", strokeWidth: 2, r: 10 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
