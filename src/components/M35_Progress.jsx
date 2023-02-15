import React from 'react'
import { Stack, CircularProgress, LinearProgress } from '@mui/material'

export const M35_Progress = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={3} direction='row'>
        <CircularProgress />
        <CircularProgress color='secondary'/>
        <CircularProgress color='warning'/>
      </Stack>

      <Stack spacing={3} direction='row'>
        {/* Carga hasta el 60% */}
        <CircularProgress variant='determinate' value={60}/>        
      </Stack>


      {/* lineas, no usar direction='row' */}
      <Stack spacing={3} >
        <LinearProgress />
        <LinearProgress color='secondary'/>
        <LinearProgress variant='determinate' value={60}/> 
      </Stack>
    </Stack>
  )
}
