import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button, ButtonGroup } from "@mui/material";
const buttons = [
  <Button key="one">All channels</Button>,
  <Button disabled key="two">
    on-line
  </Button>,
  <Button disabled key="three">
    store
  </Button>,
];
export default function DenseAppBarRight() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" className="justify-between bg-white ">
          <div className="flex sm:flex-row flex-col justify-between w-full">
            <div className="">
              <Typography
                variant=""
                component="div"
                className="text-black   shadow-none	"
              >
                <span className="font-bold"> Sales category proportion</span>
              </Typography>
            </div>
            <div className="">
              <div className="flex gap-1">
                <Button variant="outlined" className="p-0 m-0  flex flex-nowrap text-xs		"> 
                  <span className="flex flex-nowrap text-xs		"> All channels</span>
                </Button>
                <Button variant="text" className="p-0 m-0">
                  {" "}
                  on-line
                </Button>
                <Button variant="text" className="p-0 m-0">
                  store
                </Button>

                <IconButton
                  edge="start"
                  aria-label="menu"
                  className="jusify-content-center"
                  sx={{ mr: 2 }}
                >
                  <MoreHorizIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
