import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 100 },
  { name: 'Group C', value: 50 },
  { name: 'Group D', value: 200 },  
  { name: 'Group Cd', value: 300 },
  { name: 'Group Ds', value: 200 },
];

const COLORS = ['#657798','#62daab','#6395fa','#75cbed','#7666fa','#f7c122'];
const RightChar = () => {
  return (
    <div className="w-11/12  lg:w-25 xl:w-full  ">
        <ResponsiveContainer width="100%" height={500}>
    <PieChart width={200} height={200}>
    

      <Pie
        data={data} 
        labelLine={true} 
        outerRadius={180}
        innerRadius={100}
        fill="#8884d8"
        dataKey="value" 
        label
      > 
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
  </div>
  )
}

export default RightChar