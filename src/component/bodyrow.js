import React from "react";

const BodyrowTop = ({ children, topTile, pice, salelabel, saleamount }) => {
  return (
    <>
      <div className="px-2 py-2 bg-white">
        <div className=" grid  grid-row-2 gap-2   py-2 px-5">
          <div className=" flex justify-between">
            <h1 className="text-sm leading-5 text-[#00000073]">{topTile}</h1>
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
          </div>
          <div className="leading-9 text-4xl color-[rgba(0,0,0,.85)] break-all whitespace-nowrap">
            {pice}
          </div>
        </div>
        <div className="grid grid-row-1 gap-2 py-5 ">
          <>{children}</>
          <span className="border divide-solid  "></span>
        </div>

        <div className="px-5 text-[#000000d9] flex gap-2 text-xs leading-5">
          <span>{salelabel}</span>
          <span>{saleamount}</span>
        </div>
      </div>
    </>
  );
};

export default BodyrowTop;
