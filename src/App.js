import React from "react";
import Topbar from "./component/topbar";
import Drawer from "./component/drawer";
import BodyrowTop from "./component/bodyrow";

function App() {
  return (
    <div class="  flex flex-col ">
      <Topbar></Topbar>

      <div class=" flex flex-row gap-5  ">
        <div class=" bg-white  ">
          <Drawer></Drawer>
        </div>
        <div class=" flex flex-col gap-5 px-5 w-full bg-[#f0f2f5] ">
          <div class="   flex flex-row flex-wrap justify-between gap-2 pt-8">
            <div class="basis-1/4 md:basis-80 grow border-2 border-red-800  ">
              <BodyrowTop
                topTile={"Total sales"}
                pice={"￥126560"}
                salelabel={"Dailsales"}
                saleamount={"￥12423"}
              >
                 <div className="text-red-500">
                 
                 </div> 
              </BodyrowTop>
            </div>
            <div class="basis-1/4 md:basis-80 grow border-2 border-red-800  ">
              <BodyrowTop
                topTile={"Total sales"}
                pice={"￥126560"}
                saleTitle={"Dailsales"}
                saleamount={"￥12423"}
              ></BodyrowTop>
            </div>
            <div class="basis-1/4 md:basis-80 grow border-2 border-red-800  ">
              <BodyrowTop
                topTile={"Total sales"}
                pice={"￥126560"}
                saleTitle={"Dailsales"}
                saleamount={"￥12423"}
              ></BodyrowTop>
            </div>
            <div class="basis-1/4 md:basis-80 grow border-2 border-red-800  ">
              <BodyrowTop
                size={"Total sales"}
                pice={"￥126560"}
                saleTitle={"Dailsales"}
                saleamount={"￥12423"}
              ></BodyrowTop>
            </div>
          </div>
          {/* <div class="  border-2 border-rose-500 bg-white">Second Row</div>
          <div class="border-2 border-rose-800 bg-white">Third Row</div>
          <div class="border-2 border-rose-800 bg-white">4th Row</div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
