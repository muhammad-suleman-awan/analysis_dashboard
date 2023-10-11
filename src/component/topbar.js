import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import HelpIcon from "@mui/icons-material/Help";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 600),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0),
  },
  margin: 0,
  padding: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0),

  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: alpha(theme.palette.common.white, 200),
  "& .MuiInputBase-input": {
    margin: 0,
    padding: 0,
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
        backgroundColor: "white",
        color: "black",
      },
    },
  },
}));

const Topbar = () => {
  return (
    <>
      <nav
        style={{ backgroundColor: "black" }}
        className="    border-#001529-200 p-3 m-0"
      >
        <div className=" flex flex-row gap-5 justify-between  mx-4  ">
          <div className=" ">
            <a className="flex gap-3 ">
              <img
                onClick={() => {
                  var manu = document.getElementById("side-manu");
                  manu.classList.remove("bg-blue-300");
                }}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                className="h-6"
                alt="logo"
              ></img>
              <h1 className="text-white">Ant Design Pro</h1>
            </a>
          </div>
          <div className="flex flex-row    gap-5 px-4 ">
            <div className="flex flex-row gap-1  ">
              <Search className=" ">
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "white" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
            <div>
              <IconButton
                size="small"
                aria-label="show 11 new notifications"
                color="inherit"
                className="bg-white"
                style={{backgroundColor:"white"}}
              >
                <Badge badgeContent={11} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>

            <div>
              <IconButton size="small" color="white" style={{backgroundColor:"white"}} >
                <HelpIcon />
              </IconButton>
            </div>

            <div>
              <button
                id="dropdownDividerButton"
                data-dropdown-toggle="dropdownDivider"
                className="text-white  focus:box-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                <img
                  className="h-6 px-2"
                  src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
                  alt="avatar"
                ></img>
                Serati Ma
              </button>

              <div
                id="dropdownDivider"
                data-dropdown-toggle="dropdownLeftEnd"
                data-dropdown-placement="left-end"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Separated link
                  </a>
                </div>
              </div>
            </div>
            <div>
              <button
                id="dropdownDividerButton"
                data-dropdown-toggle="dropdownDivider"
                className="text-white   focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                <svg
                  className="h-6"
                  viewBox="0 0 24 24"
                  focusable="false"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                    className="css-c4d79v"
                  ></path>
                </svg>
              </button>

              <div
                id="dropdownDivider"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDividerButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-2">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
