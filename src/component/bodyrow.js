import React from "react";

const BodyrowTop = () => {
  return (
    <div>
      <div class="     p-6 bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between	  ">
          <span>Total sales</span>
          <svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg>
        </div>
        <div>
          <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            ¥ 126,560
          </h5>
        </div>
        <div class="flex gap-4">
          <div class="flex ">
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              12% year-on-week
            </p>

            <span class="up___1wFiw">
              <span
                role="img"
                aria-label="caret-up"
                class="anticon anticon-caret-up"
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
          </div>
          <div class="flex ">
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              11% year-on-year
            </p>
            <span class="down___2tA2-">
              <span
                role="img"
                aria-label="caret-down"
                class="anticon anticon-caret-down"
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
        </div>
        Daily sales ￥12,423
      </div>
    </div>
  );
};

export default BodyrowTop;
