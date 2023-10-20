import React from "react";
import DenseAppBar from "./component/popularTabbar";
import LeftChartpopularp from "./popularchart1";
import PopularpTable from "./component/populartableLeft";
import DenseAppBarRight from "./poparpgrightside";
import MyDoughnutChart from "./component/chartrightpopular";
import RightChar from "./rightpopularChart";

const PopularSearch = () => {
  return (
    <div>
      <div className="grid grid-cols-12 md:grid-cols-6 gap-5" >
        <div className="col-span-12 xl:col-span-6 bg-white ">
          <div className="grid grid-rows-3   ">
            <div className=" flex flex-row justify-between ">
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
            <div >
              <PopularpTable />
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6 bg-white ">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <DenseAppBarRight />
            </div>
            <div  className="col-span-12">
              <RightChar></RightChar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSearch;
