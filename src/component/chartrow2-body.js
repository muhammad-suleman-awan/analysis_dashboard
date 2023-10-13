import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartBodymd = () => {
    const data = [
        {
          name: 'Page As',
          uv: 4000,
          pv: 9400,
          amt: 2400,
        },
        {
          name: 'Page zB',
          uv: 3000,
          pv: 7398,
          amt: 2210,
        },
        {
          name: 'Page Cx',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page xD',
          uv: 2780,
          pv: 8908,
          amt: 2000,
        },
        {
          name: 'Page cE',
          uv: 1890,
          pv: 6800,
          amt: 2181,
        },
        {
          name: 'Page v',
          uv: 2390,
          pv: 9800,
          amt: 2500,
        },
        {
          name: 'Page n',
          uv: 3490,
          pv: 8300,
          amt: 2100,
        },
         {
          name: 'Page m',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Page z',
          uv: 3490,
          pv: 7300,
          amt: 2100,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 9300,
          amt: 2100,
        },
        {
          name: 'Page eG',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        }, {
          name: 'Page eGd',
          uv: 3490,
          pv: 7300,
          amt: 2100,
        }, {
          name: 'Page eGe',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        }, {
          name: 'Page eG3',
          uv: 3490,
          pv: 6300,
          amt: 2100,
        },
        {
          name: 'Page efG',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: 'Page deG',
          uv: 3490,
          pv: 8300,
          amt: 2100,
        },
        {
          name: 'Page feG',
          uv: 3490,
          pv: 6300,
          amt: 2100,
        },
        
      ];
      
  return (
    <div> 
            <ResponsiveContainer width="100%" height={350}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3" />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartBodymd