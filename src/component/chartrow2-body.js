import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartBodymd = () => {
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

  const chartWidth = isMobile ? "120%" : "90%"; // Adjust the width based on the media query


  const data = [
    {
      name: "1",
      uv: 4000,
      pv: 9400,
      amt: 240,
    },
    {
      name: "2",
      uv: 3000,
      pv: 7398,
      amt: 220,
    },

    {
      name: "3",
      uv: 2780,
      pv: 8908,
      amt: 200,
    },
    {
      name: "4",
      uv: 1890,
      pv: 6800,
      amt: 2181,
    },
    {
      name: "5",
      uv: 2390,
      pv: 9800,
      amt: 2500,
    },
    {
      name: "6",
      uv: 3490,
      pv: 8300,
      amt: 2100,
    },
    {
      name: "7",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "8",
      uv: 3490,
      pv: 7300,
      amt: 2100,
    },
    {
      name: "9",
      uv: 3490,
      pv: 9300,
      amt: 2100,
    },
    {
      name: "10",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "11",
      uv: 3490,
      pv: 7300,
      amt: 2100,
    },
    {
      name: "12",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div style={{ width: chartWidth }}>
        <ResponsiveContainer width="100%" height={300}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 55,
            left: 0,
            bottom: 5,
          }}
          barSize={15}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 0, right: 10 }}
          />
          <YAxis /> 
          <Bar dataKey="pv" fill="#6395fa" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartBodymd;
