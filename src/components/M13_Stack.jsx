import React from 'react'
import { Stack, Box, Divider } from '@mui/material'


export const M13_Stack = () => {
  return (
    <Stack 
      sx={{border: '1px solid'}} 
      direction='row' 
      spacing={2} 
      divider={<Divider orientation='vertical' flexItem/>}
    >
      <Box sx={{
        backgroundColor:'primary.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding: '16px',
        '&:hover':{
          backgroundColor: 'primary.light'
        }

      }}>
        Primary Color
      </Box>
      <Box sx={{
        backgroundColor:'secondary.main',
        color: 'white',
        height: '100px',
        width: '100px',
        padding: '16px',
        '&:hover':{
          backgroundColor: 'primary.light'
        }

      }}>
        Secondary Color
      </Box>
    
    </Stack>
  )
}
