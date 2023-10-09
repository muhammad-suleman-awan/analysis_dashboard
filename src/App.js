import React from "react";
import Topbar from "./component/topbar";
import Drawer from "./component/drawer";
import BodyrowTop from "./component/bodyrow";

function App() {
  return (
    <div class="border border-rose-200   flex flex-col ">
      <Topbar></Topbar>

      <div class="grid grid-cols-12   h-fir gap-8 bg-[#f0f2f5] m-5   ">
        <div class="col-span-2  p-3 rounded bg-white ">
          <Drawer></Drawer>
        </div>
        <div class="col-span-10 md:bg-rose-600 gird-cols-12 row-span-1  h-fit flex gap-8 bg-[#f0f2f5]  p-3 rounded-md">
          <BodyrowTop></BodyrowTop>
          <BodyrowTop></BodyrowTop>
          <BodyrowTop></BodyrowTop>
          <BodyrowTop></BodyrowTop>
        </div>
      </div>
    </div>
  );
}

export default App;
