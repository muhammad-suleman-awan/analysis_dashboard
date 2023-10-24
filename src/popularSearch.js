import React from "react";
import DenseAppBar from "./component/popularTabbar";
import LeftChartpopularp from "./popularchart1";
import PopularpTable from "./component/populartableLeft";
import DenseAppBarRight from "./poparpgrightside";
import MyDoughnutChart from "./component/chartrightpopular";
import RightChar from "./rightpopularChart";

const PopularSearch = () => {
  return (
    <div className="grid grid-cols-12  ">
      <div className="col-span-12 lg:col-span-6">
        <div className=" flex flex-row justify-between mb-10 ">
          <DenseAppBar></DenseAppBar>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="  sm:col-span-6 ">
            <LeftChartpopularp />
          </div>
          <div className="col-span-5 sm:col-span-6">
            {" "}
            <LeftChartpopularp />
          </div>
        </div>
        <div>
          <PopularpTable />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 bg-white pt-5 sm:pt-0 ">
       
          <div className="col-span-12 ">
            <DenseAppBarRight />
            ``
          </div>
          <div className="col-span-12">
            <RightChar></RightChar>
          </div>
        </div>
    
    </div>
  );
};

export default PopularSearch;
