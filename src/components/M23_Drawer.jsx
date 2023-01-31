import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material';

export const M23_Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton 
        size='largue' 
        color='inherit' 
        edge='start'
        onClick={ () => setIsDrawerOpen(!isDrawerOpen)}
        sx={{backgroundColor: '#B58BF9'}}
        aria-label='logo'
      >        
        <MenuIcon/>
      </IconButton>
      <Drawer 
        anchor='left'
        open={isDrawerOpen}
        onClose={ () => setIsDrawerOpen(false)}
      >
        <Box 
          p={2} 
          width='250px' 
          textAlign='center'
          role='presentation'
          sx={{backgroundColor: '#6DB8EE'}}
        >
          <Typography 
            variant='h6' 
            component='div'
            sx={{backgroundColor: '#B6DCF6'}}
          >Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}


/* #B6DCF6
Drawer = Cajón - Estará oculto por defecto
anchor='left' - Donde estará anclado






*/