import React, { useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 100 },
  { name: "Group C", value: 50 },
  { name: "Group D", value: 200 },
  { name: "Group Cd", value: 300 },
  { name: "Group Ds", value: 200 },
];

const COLORS = [
  "#657798",
  "#62daab",
  "#6395fa",
  "#75cbed",
  "#7666fa",
  "#f7c122",
];
const RightChar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = width < 768; // Example media query for mobile devices

  const chartWidth = isMobile ? "100%" : "90%"; // Adjust the width based on the media query

  return (
    <div style={{ width: chartWidth }} >
      {" "}
      <ResponsiveContainer width="100%" height={400} >
        <PieChart width={200} height={200} >
          <Pie
            data={data}
            labelLine={true}
            outerRadius={130}
            innerRadius={50}
            fill="#8884d8"
            dataKey="value"
            label
            margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RightChar;
