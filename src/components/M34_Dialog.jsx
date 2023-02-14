import { useState } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'

export const M34_Dialog = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        variant='contained'
        onClick={ () => setIsOpen(true)}>Open Dialog</Button>
      <Dialog 
        open={isOpen}
        onClose={ () => setIsOpen(false) }
        aria-labelledby='id_dialog_Title' 
        aria-describedby='id_dialog_description'
      >

        {/* titulo */}
        <DialogTitle id='id_dialog_Title'>Enviar el examen?</DialogTitle>


        {/* Contenido */}
        <DialogContent>
          <DialogContentText id='id_dialog_description'>
            Estás seguro de enviar el examen? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus provident maxime laudantium.
          </DialogContentText>
        </DialogContent>

        {/* Botones */}
        <DialogActions>
          <Button onClick={ () => setIsOpen(false)}>Cancelar</Button>
          <Button autoFocus onClick={ () => setIsOpen(false)}>Enviar</Button>
        </DialogActions>

      </Dialog>
    </>
  )
}
