import React from "react";
import Topbar from "./component/topbar";
import Drawer from "./component/drawer";
import BodyrowTop from "./component/bodyrow";
import LineChart from "./component/LineChart";
import BarChart from "./component/barChart";
import SliderSizes from "./component/sliderSizes";
function App() {
  return (
    <div className="  flex flex-col ">
      <Topbar></Topbar>

      <div className=" flex flex-row gap-5  ">
        <div className=" bg-white  ">
          <Drawer></Drawer>
        </div>
        <div className=" flex flex-col gap-5 px-5 w-full bg-[#f0f2f5] ">
          <div className="   flex flex-row flex-wrap justify-between gap-2 pt-8">
            <div className="basis-1/4 md:basis-80 grow  ">
              <BodyrowTop
                topTile={"Total sales"}
                pice={"￥126560"}
                salelabel={"Dailsales"}
                saleamount={"￥12,423"}
              >
                {/* rgba(0,0,0,.85) */}
                <div className="text-sm leading text-[#000000d9] flex gap-10  pl-5">
                  <span className="flex gap-3">
                    <span>12% year-on-week</span>
                    <span
                      role="img"
                      aria-label="caret-up"
                      className="pt-1 anticon anticon-caret-up"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        focusable="false"
                        data-icon="caret-up"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                      </svg>
                    </span>
                  </span>
                  <span className="flex gap-2">
                    <span>11% year-on-year</span>
                    <span
                      role="img"
                      aria-label="caret-down"
                      className="pt-1  anticon anticon-caret-down"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        focusable="false"
                        data-icon="caret-down"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </BodyrowTop>
            </div>
            <div className="basis-1/4 md:basis-80 grow    ">
              <BodyrowTop
                topTile={"Views"}
                pice={"￥8,846"}
                salelabel={"1,234"}
                saleamount={"daily visits"}
              >
                <LineChart className=""></LineChart>
              </BodyrowTop>
            </div>
            <div className="basis-1/4 md:basis-80 grow ">
              <BodyrowTop
                topTile={"NUMBER OF PAYMENTS"}
                pice={"6,560"}
                salelabel={"Conversion rate"}
                saleamount={"60%"}
              >
                {/* rgba(0,0,0,.85) */}
                <BarChart></BarChart>
              </BodyrowTop>
            </div>
            <div className="basis-1/4 md:basis-80 grow   ">
              <BodyrowTop
                topTile={"Operational activity effecta"}
                pice={"78%"}
                salelabel={"12% year-on-week"}
                saleamount={"11% year-on-year"}
              > 
                      <SliderSizes></SliderSizes>
              </BodyrowTop>
            </div>
          </div>
          {/* <div className="  border-2 border-rose-500 bg-white">Second Row</div>
          <div className="border-2 border-rose-800 bg-white">Third Row</div>
          <div className="border-2 border-rose-800 bg-white">4th Row</div> */}
          <div style={{ width: "800px" }}>
            <canvas id="acquisitions"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
