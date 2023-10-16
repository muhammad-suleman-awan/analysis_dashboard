import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 30 },
  { name: 'Group B', value: 70 },
];
const COLORS = ['#e9eef4', '#fab120'];

const CircularProgressBar = ({valueData}) => {
  const onPieEnter = (data, index) => {
    // Handle the onMouseEnter event if needed
    console.log('onMouseEnter', data, index);
  };

  return (
    <PieChart width={100} height={150}>
    {console.log("In chart ",valueData)}
      <Pie
        data={data} 
        innerRadius={30}
        outerRadius={40}
        fill="#fab120"
        paddingAngle={0}
        dataKey="value"
        onMouseEnter={onPieEnter}  // Add onMouseEnter event handler
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
