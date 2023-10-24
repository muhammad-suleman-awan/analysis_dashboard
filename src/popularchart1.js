import React from "react";
import PopularSearch from "./popularSearch";
import ChartpopularLeft from "./component/chartpopular";

const LeftChartpopularp = () => {
  return (
    <div className="mb-5">
     
      <div className="flex gap-3 pl-5">
        <h1>Number of search users</h1>
        <span className="pt-1">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="info-circle"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </span>
      </div>
      <div className="flex gap-10 pl-5">
        <span>12,321</span>
        <span className="flex gap-1">
          <span>17.1</span>
          <span className="pt-1">
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
        </span>
      </div>
      <div className="pl-5">
        <ChartpopularLeft />
      </div>
    </div>
  );
};

export default LeftChartpopularp;
