import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon, Box } from '@mui/material'
import {ContentCopy as ContentCopyIcon, Print as PrintIcon, Share as ShareIcon} from '@mui/icons-material';



export const M24_SpeedDial = () => {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial 
        ariaLabel='Navigation Speed Dial'
        sx={{position: 'absolute', bottom: 16, right: 16}}         
        icon={<SpeedDialIcon/>}   
      >    
        <SpeedDialAction icon={<ContentCopyIcon/>} tooltipTitle='Copy'/>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print'/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share'/>
      </SpeedDial>
    </Box>
  )
}


/* 
bottom: 16, son 16 pixeles, no hace falta especificarlos

*/