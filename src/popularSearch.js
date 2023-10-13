import React from "react";
import DenseAppBar from "./component/popularTabbar";
import LeftChartpopularp from "./popularchart1";
import PopularpTable from "./component/populartableLeft";
import DenseAppBarRight from "./poparpgrightside";  
import MyDoughnutChart from "./component/chartrightpopular";

const PopularSearch = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6  bg-white">
          <div className="grid grid-rows-3">
            <div className=" flex flex-row justify-between">
              <DenseAppBar></DenseAppBar>
            </div>
            <div className="flex grid grid-cols-12 px-5 py-2">
              <div className="  col-span-6">
               
                <LeftChartpopularp />
              </div>
              <div className="  col-span-6">
                {" "}
                <LeftChartpopularp />
              </div>
            </div>
            <div className="border-2 border-red-400">
              <PopularpTable />
            </div>
          </div>
        </div>
        <div className="col-span-6 bg-white">
          <div className="grid grid-rows-2">
            <div><DenseAppBarRight/></div>
            <div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSearch;
