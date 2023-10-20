import { Button } from "@mui/material";
import React, { useState } from "react";
import DatapickerWrapper from "./datepicker-wrapper";
import ChartBodymd from "./chartrow2-body";
import Tabledata from "./tabledata-bodyrow2";
const Bodyrow2 = () => {
  return (
    <div className="px-5 py-5 grid grid-col-3  col-lg-4 ">
      <div className=" grid grid-cols-6 md:grid-cols-12  ">
        <div className="col-span-8 2xl:col-span-2 xl:col-span-2 lg:col-span-3 md:col-span-4 pl-5 space-x-0 lg:space-x-5   py-1">
          <button
            type="button"
            class=" px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Sales
          </button>
          <button
            type="button"
            class="px-5 mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Views
          </button>
        </div>
        <div className="col-span-1 h-0 md:h-10 2xl:col-span-8 xl:col-span-7  lg:col-span-5 md:col-span-1 flex  xl:justify-end lg:justify-center	flex-nowrap invisible lg:visible   ">
          <button
            type="button"
            class=" mr-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Today
          </button>
          <button
            type="button"
            class=" mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            this week,
          </button>
          <button
            type="button"
            class="  mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            this month,
          </button>
          <button
            type="button"
            class=" mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            this year
          </button>

          <button
            type="button"
            class="py-2.5  mr-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg   hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Small Select
          </button>
        </div>
        <div className="col-span-1 2xl:col-span-2  lg:col-span-4 xl:col-span-3  md:col-span-7  flex md:justify-end      sm:col-span-2    py-1  flex-nowrap  sm:visible invisible ">
          <DatapickerWrapper />
        </div>
      </div>

      <div className="grid grid-cols-6  md:grid-cols-12">
        <div className="col-span-8  ">
          <ChartBodymd></ChartBodymd>
        </div>
        <div className="col-span-4">
          <Tabledata></Tabledata>
        </div>
      </div>
    </div>
  );
};

export default Bodyrow2;
