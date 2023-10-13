// import React from 'react';
// import { Doughnut, ResponsiveContainer, Cell, Legend } from 'recharts';

// const data = [
//   { name: 'Category A', value: 400 },
//   { name: 'Category B', value: 300 },
//   { name: 'Category C', value: 300 },
//   { name: 'Category D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const MyDoughnutChart = () => {
//   return (
//     <ResponsiveContainer width="100%" height={300}>
//       <Doughnut
//         data={data}
//         dataKey="value"
//         nameKey="name"
//         outerRadius={80}
//         label={(entry) => entry.name}
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Doughnut>
//       <Legend />
//     </ResponsiveContainer>
//   );
// };

// export default MyDoughnutChart;
