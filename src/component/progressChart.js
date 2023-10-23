import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#e9eef4", "#fab120"];

const CircularProgressBar = ({ valueData }) => {
  const onPieEnter = (data, index) => {
    // Handle the onMouseEnter event if needed
    console.log("onMouseEnter", data, index);
  };
  const data = [
    { name: "Group A", value: 100 - valueData },
    { name: "Group B", value: valueData },
  ];
  return (
    <PieChart width={100} height={150}>
      {console.log("In chart ", valueData)}
      <Pie
        data={data}
        innerRadius={30}
        outerRadius={40}
        fill="#fab120"
        paddingAngle={0}
        dataKey="value"
        onMouseEnter={onPieEnter} // Add onMouseEnter event handler
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        {/* <Cell key={`cell-${valueData}`}  fill={COLORS[valueData % COLORS.length]}></Cell> */}
      </Pie>
    </PieChart>
  );
};

export default CircularProgressBar;
