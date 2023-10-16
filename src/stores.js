import React from "react";
import ProcessTopChart from "./component/processChart";
import RadialBarChart from "./component/progressChart";
import StoreChartBody from "./component/storeChartBody";

const data = [
  { name: "store 0", Number: "20%" },
  { name: "store 1", Number: "70%" },
  { name: "store 2", Number: "10%" },
  { name: "store 3", Number: "60%" },
  { name: "store 4", Number: "20%" },
  { name: "store 5", Number: "10%" },
  { name: "store 6", Number: "70%" },
  { name: "store 7", Number: "60%" },
  { name: "store 8", Number: "40%" },
  { name: "store 9", Number: "70%" },

  // Add more store objects as needed
];

const StoresWindow = () => {
  return (
    <div className="flex flex-col">
      <ProcessTopChart displayData={data} />
      <div className="py-10"><StoreChartBody></StoreChartBody></div>
    </div>
  );
};

export default StoresWindow;
