import { Box, Typography } from '@mui/material'
import React from 'react'



function Footer() {
  return (
    <Box sx={{ display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    height:"15vh"}}>
      <Typography variant="body2" align="center" color="textSecondary" gutterBottom>
          Copyright © {new Date().getFullYear()} FrameLaunch
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          Terms of Use | Privacy Policy
        </Typography>
    </Box>
  )
}

export default Footer
