import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
  return (
    <div className='pt-11'>
    <Box sx={{ width: 300 }} >
     
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
    </div>
  );
}