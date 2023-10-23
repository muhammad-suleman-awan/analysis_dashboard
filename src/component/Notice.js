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
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Popover
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
            <Typography sx={{ p: 2 }}>
            <div className="flex">
            <MenuPopupState></MenuPopupState>
            <MenuPopupState></MenuPopupState>
            <MenuPopupState></MenuPopupState>
            </div>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
