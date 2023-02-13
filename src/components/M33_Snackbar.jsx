import React, { useState, forwardRef } from 'react'
import {Stack, Snackbar, Button,   Alert } from '@mui/material'

const SnackBarAlert = forwardRef(
  function SnackBarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props}/>
  }
);


export const M33_Snackbar = () => {
  const [open, setIsOpen] = useState(false)
  const [isOpenAlert, setisOpenAlert] = useState(false)

  const onClose = (e, reason) => {
    if (reason == 'clickaway') {
      return
    }
    setIsOpen(false)
  }

  const onCloseAlert = (e, reason) => {
    if (reason == 'clickaway') {
      return
    }
    setisOpenAlert(false)
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={2}>
        <Button 
          variant='contained'
          onClick={ () => setIsOpen(true)} 
        >Enviar - Centrado Default
        </Button>

        <Snackbar
          message='Formulario enviado exitosamente'
          autoHideDuration={1500}
          open={open}
          onClose={onClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
        />


      {/* Segundo botón */}
      </Stack>
      <Stack spacing={2}>
      <Button 
          variant='contained'
          color='info'
          onClick={ () => setisOpenAlert(true)} 
        >Enviar - Con Alert
        </Button>
      <Snackbar
          open={isOpenAlert}
          autoHideDuration={1500}
          onClose={onCloseAlert}
        >
          <SnackBarAlert onClose={onCloseAlert} severity='success'>
            Formulario enviado
          </SnackBarAlert> 
        </Snackbar>
      </Stack>
    </Stack>
  )
}
