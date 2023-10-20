import React from "react";
import RadialBarChart from "./progressChart";

const ProcessTopChart = ({ displayData }) => {
  return (
    <div className="flex flex-row  overflow-auto gap-5 scrollpr">
      {/* {alert("Message",displayData)} */}
      {console.log("hello", displayData)}
      {displayData.map((store, index) => (
        <div className="flex">
          <div className="flex flex-col  justify-center px-5" >
            <h1 className="mb-4 text-base text-black transition-all	">{`Stores ${index}`}</h1>
            <h1 className="text-sm text-[#00000073] leading transition-all	">{`Convers...`}</h1>
            <h1 className="leading-8 text-2xl	text-[#000000d9]">{`${store.Number || "N/A"}`}</h1>
          </div>
          <div>
            <RadialBarChart valueData={store.Number}></RadialBarChart>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessTopChart;
