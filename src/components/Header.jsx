import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';




function Header() {
    const projectIntro=" A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <img src="https://i.postimg.cc/MH9nnd45/wr-resumes-logo-removebg-preview.png" alt="" width={70}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold',fontSize:'30px'}}>
           rBuilder
          </Typography>
        <Tooltip title={projectIntro}>
              <Button sx={{fontSize:'18px',fontWeight:'bold'}} color="inherit">ABOUT US</Button>
        </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header