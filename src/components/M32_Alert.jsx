import React from 'react'
import { Stack, Alert, AlertTitle, Divider, Button  } from '@mui/material'
import {ReportGmailerrorred as ErrorIcon } from '@mui/icons-material/';


export const M32_Alert = () => {
  return (
    <Stack spacing={2} sx={{ width: '600px' }}>
      <Stack spacing={2}>
        <Alert severity='error'>Error Alert</Alert>
        <Alert severity='warning'>warning Alert</Alert>
        <Alert severity='info'>Info Alert</Alert>
        <Alert severity='success'>Success Alert</Alert>
      </Stack>

      <Divider/>
      {/* variant='outlined' */}
      <Stack spacing={2}>
        <Alert variant='outlined' severity='error'>Error Alert</Alert>
        <Alert variant='outlined' severity='warning'>warning Alert</Alert>
        <Alert variant='outlined' severity='info'>Info Alert</Alert>
        <Alert variant='outlined' severity='success'>Success Alert</Alert>
      </Stack>

      <Divider/>
      {/* variant='filled'  */}
      <Stack spacing={2}>
        <Alert variant='filled' severity='error'>Error Alert</Alert>
        <Alert variant='filled' severity='warning'>warning Alert</Alert>
        <Alert variant='filled' severity='info'>Info Alert</Alert>
        <Alert variant='filled' severity='success'>Success Alert</Alert>
      </Stack>

      <Divider/>
      {/* AlertTitle */}
      <Stack spacing={2}>
        <Alert severity='error'>
          <AlertTitle>Error 123</AlertTitle>
          Mensaje de error
        </Alert>
      </Stack>

      <Divider/>
      {/* icon */}
      <Stack spacing={2}>
        <Alert severity='error' icon={<ErrorIcon fontSize='inherit' /> }>
          <AlertTitle>Error 456</AlertTitle>
          Mensaje de error
        </Alert>
      </Stack>

      <Divider/>
      {/* AlertTitle */}
      <Stack spacing={2}>
        <Alert severity='success' onClose={ () => console.log('Cerrado')}>
          <AlertTitle>Error 123</AlertTitle>
          Mensaje de error
        </Alert>
      </Stack>


      <Divider/>
      {/* action Button */}
      <Stack spacing={2}>
        <Alert 
          severity='warning'          
          action={
            <Button 
              color='inherit' 
              size='small' 
              onClick={ () => console.log('Revertir Btn')}
            >
              Revertir
            </Button>}
        >
          <AlertTitle>Error 123</AlertTitle>
          Mensaje de error
        </Alert>
      </Stack>

    </Stack>
  )
}
