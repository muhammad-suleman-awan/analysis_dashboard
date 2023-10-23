import React, { useState, useEffect } from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

const LineChartComponent = () => {
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
    <div style={{ width: chartWidth }}>
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
