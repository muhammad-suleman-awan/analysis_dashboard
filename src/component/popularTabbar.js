import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function DenseAppBar() {
  
  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="static"   >
        <Toolbar variant="dense" className='justify-between bg-white '>
        <Typography variant="h6"    component="div" className="text-black">
        Popular searches online
          </Typography>
          <IconButton edge="start"   aria-label="menu" className="jusify-content-center" sx={{ mr: 2 }}>
            <MoreHorizIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}