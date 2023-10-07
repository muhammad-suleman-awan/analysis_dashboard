import React from "react";
import Topbar from "./component/topbar";
import Drawer from "./component/drawer";
import BodyrowTop from "./component/bodyrow"; 

function App() {
  return (
    <div>
      <Topbar></Topbar>

      <div class="grid grid-cols-12  gap-8 bg-[#f0f2f5] ">
        <div class="col-span-2  p-3 rounded bg-white">
        
          <Drawer></Drawer>
        </div>
        <div class="col-span-10 row-span-1 flex gap-8 bg-[#f0f2f5]  p-3 rounded-md">
          <BodyrowTop ></BodyrowTop>
          <BodyrowTop></BodyrowTop>
          <BodyrowTop></BodyrowTop>
          <BodyrowTop></BodyrowTop> 
        </div>
      
        
      </div>
    </div>
  );
}

export default App;
