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
          <Typography
            variant=""
            component="div"
            className="text-black   shadow-none	"
          >
            Sales category proportion
          </Typography>
          <div className="flex">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "& > *": {
                  m: 1,
                },
              }}
            >
              <ButtonGroup size="small" aria-label="small button group">
                {buttons}
              </ButtonGroup>
            </Box>
            <IconButton
              edge="start"
              aria-label="menu"
              className="jusify-content-center"
              sx={{ mr: 2 }}
            >
              <MoreHorizIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
