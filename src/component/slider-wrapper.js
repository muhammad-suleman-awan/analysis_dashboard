import * as React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const PrettoSlider = styled(Slider)({
  color: "#1fc5c5",
  borderRadius: "0px",
  height: 8,

  width: 385,
  marginLeft: 25,

  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    marginLeft: "5px",
    height: 18,
    width: 0.5,
    borderRadius: "2px",

    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    display: "none",
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#1fc5c5",
    transformOrigin: "bottom left",

    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      display: "none",

      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

export default function SliderWrapper() {
  return (
    <PrettoSlider
      className="mt-5 mb-7"
      valueLabelDisplay="auto"
      aria-label="pretto slider"
      defaultValue={70}
    />
  );
}
