import React from "react";

const BasicTable = () => {
  const salesData = [
    { rank: 1, storeName: "Store No. 0, Gongzhuan Road", sales: 323234 },
    { rank: 2, storeName: "Store No. 1, Gongzhuan Road", sales: 323234 },
    { rank: 3, storeName: "Store No. 2, Gongzhuan Road", sales: 323234 },
    { rank: 4, storeName: "Store No. 3, Gongzhuan Road", sales: 323234 },
    { rank: 5, storeName: "Store No. 4, Gongzhuan Road", sales: 323234 },
    { rank: 6, storeName: "Store No. 5, Gongzhuan Road", sales: 323234 },
    { rank: 7, storeName: "Store No. 6, Gongzhuan Road", sales: 323234 },
  ];

  return (
    <div className=" flex flex-col gap-5 pt-10 pr-5">
      <h2>Store Sales Ranking</h2>
      <table>
        <colgroup>
          <col  style={{ width: "30px" }}></col>
          <col   style={{ width: "300px" }}></col>
          <col  style={{ width: "0px" }}></col>
        </colgroup>
        {/* <thead>
          <tr>
            <th>Ranking</th>
            <th>Store Name</th>
            <th>Sales</th>
          </tr>
        </thead> */}
        <tbody>
          {salesData.map(({ rank, storeName, sales }) => (
            <tr key={rank}>
              <td>{rank}</td>
              <td>{storeName}</td>
              <td style={{ textAlign: "right" }}>{sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;

// import React from "react";

// const Tabledata = () => {
//   return (
//     <div className="  ">
//       <h1 className="font-semibold	 mt-5">Store sales ranking</h1>

//       <table className=" mt-2 ">
//         <colgroup className="    ">
//           <col span={1} style={{ width: "5%" }} className=" " />
//           <col span={1} style={{ width: "100%" }} />
//           <col span={1} />
//         </colgroup>
//         <tr className="font-semibold mb-5 px-5 b	" style={{ margin: "10px" }}>
//           <td className="bg-black text-white rounded-full mr-3 flex justify-center ">
//             1
//           </td>
//           <td>Store No. 0, Gongzhuan Road</td>
//           <td>323,234</td>
//         </tr>
//         <tr className="pt-5 font-semibold mb-5 p-10  	">
//           <td className="bg-black text-white rounded-full mr-3 flex justify-center ">
//             1
//           </td>
//           <td>Store No. 0, Gongzhuan Road</td>
//           <td>323,234</td>
//         </tr>{" "}
//         <tr className="font-semibold mb-5 px-5 b	" style={{ margin: "10px" }}>
//           <td className="bg-black text-white rounded-full mr-3 flex justify-center ">
//             1
//           </td>
//           <td>Store No. 0, Gongzhuan Road</td>
//           <td>323,234</td>
//         </tr>
//         <tr className="pt-5 font-semibold mb-5 p-10  	">
//           <td className="bg-black text-white rounded-full mr-3 flex justify-center ">
//             1
//           </td>
//           <td>Store No. 0, Gongzhuan Road</td>
//           <td>323,234</td>
//         </tr>{" "}
//         <tr className="font-semibold mb-5 px-5 b	" style={{ margin: "10px" }}>
//           <td className="bg-black text-white rounded-full mr-3 flex justify-center ">
//             1
//           </td>
//           <td>Store No. 0, Gongzhuan Road</td>
//           <td>323,234</td>
//         </tr>
//         <tr className="pt-5 font-semibold mb-5 p-10  	">
//           <td className="bg-black text-white rounded-full mr-3 flex justify-center ">
//             1
//           </td>
//           <td>Store No. 0, Gongzhuan Road</td>
//           <td>323,234</td>
//         </tr>
//       </table>
//     </div>
//   );
// };

// export default Tabledata;
