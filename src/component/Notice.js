import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Badge, IconButton } from "@mui/material";
import MenuPopupState from "./text";

export default function PopoverPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            variant="text"
            {...bindTrigger(popupState)}
            className="flex flex-col"
          >
            <span className="ant-badge badge___2Vc9h  ">
              <span
                role="img"
                aria-label="bell"
                className="anticon anticon-bell icon___1g-4R "
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="bell"
                  width="2em"
                  height="1.5em"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"></path>
                </svg>
              </span>
              <sup
                data-show="true"
                className="ant-scroll-number ant-badge-count ant-badge-multiple-words"
                title="11"
                style={{ boxShadow: "none" }}
              >
                <span
                  className="ant-scroll-number-only"
                  style={{ transition: "none 0s ease 0s" }}
                >
                  <span className="ant-scroll-number-only-unit current">1</span>
                </span>
                <span
                  className="ant-scroll-number-only"
                  style={{ transition: "none 0s ease 0s" }}
                >
                  <span className="ant-scroll-number-only-unit current">1</span>
                </span>
              </sup>
            </span>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <div className="flex flex-row">
              <MenuPopupState data={"Notice(4)"}></MenuPopupState>
              <MenuPopupState data={"Message(3)"}></MenuPopupState>
              <MenuPopupState data={"To-do(4)"}></MenuPopupState>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
