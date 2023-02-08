import React from 'react'
import { Stack, Tooltip, IconButton } from '@mui/material'
import { Delete as DeleteIcon, ArrowCircleDown as ArrowCircleDownIcon, ArrowCircleRight as ArrowCircleRightIcon } from '@mui/icons-material/';

export const M30_Tooltip = () => {
  return (
    <Stack direction='row' spacing={2}>

      <Tooltip title='Bottom'> 
        <IconButton sx={{bgcolor: '#303030'}}>
          <ArrowCircleDownIcon color='warning'/>
        </IconButton>
      </Tooltip>

      <Tooltip 
        title='Right' 
        placement='right' 
        arrow 
        enterDelay={500} 
        leaveDelay={1500}
      > 
        <IconButton sx={{bgcolor: '#303030'}}>
          <ArrowCircleRightIcon color='warning'/>
        </IconButton>
      </Tooltip>


    </Stack>
  )
}
/*
Texto hover sobre el ícono 
<Tooltip title='Delete'> 

placement='right'  Ubicación del texto al hacer hover
arrow  -  Con arrow muestra la flecha

enterDelay={500}  -- tiempo en ms para que aparezca el texto
leaveDelay={1500} -- tiempo para que se borre el texto
*/
