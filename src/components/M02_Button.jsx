import { Button, Stack, IconButton } from '@mui/material'
import React, {Fragment} from 'react'
import { Send as SendIcon } from '@mui/icons-material';


export const M02_Button = () => {
  return (
    <Fragment>
      {/* Espacio de 2 y dirección flex row*/}
      <Stack spacing={2} direction="row"> 

        {/* Llamar poco la atención, pie de página o ventana emergente */}
        <Button variant="text">Text</Button>

        {/* contained se usa para llamar la atención Ej: Registro o login*/}
        <Button variant="contained">Contained</Button>

        {/* Acciones secundarias Ej Cancelar o retroceder*/}
        <Button variant="outline">outline</Button>
      </Stack>



      {/* Segunda fila */}
      <Stack spacing={2} direction="row">
        {/* ir a google */}
        <Button variant='text' href='https://www.google.com/'>ir Google</Button>
      </Stack>



      {/* Tercera fila */}
      {/*Paleta de colores https://mui.com/material-ui/customization/palette/*/}
      {/* palette > "los colores: primary, secondary, etc" */}
      {/* https://mui.com/material-ui/customization/default-theme/ */}
      <Stack spacing={2} direction="row">
        {/* ir a google */}
        <Button variant='contained' color='primary'>Primary</Button>
        <Button variant='contained' color='secondary'>secondary</Button>
        <Button variant='contained' color='error'>error</Button>
        <Button variant='contained' color='warning'>warning</Button>
        <Button variant='contained' color='info'>info</Button>
        <Button variant='contained' color='success'>success</Button>
      </Stack>



    {/* Cuarta fila - Tamaños*/}
    {/* ponemos block ya que por defecto es flex y afecta al tamaño */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
      </Stack>




      {/* Quinta fila - Iconos */}
      <Stack spacing={2} direction="row">
        <Button variant='contained' startIcon={<SendIcon/>}> StartIcon </Button>
        <Button variant='contained' endIcon={<SendIcon/>}> EndIcon </Button>

        {/* disableElevation = quita sombra del botón */}
        <Button variant='contained' startIcon={<SendIcon/>} disableElevation>     
          StartIcon 
        </Button>

        {/* Quita el efecto agua al pulsar el botón */}
        <Button variant='contained' endIcon={<SendIcon/>} 
          disableRipple
        >
          EndIcon 
        </Button>
      </Stack>



      {/* Sexta fila - IconButton */}
      {/* aria-label se agrega por accesibilidad */}
      <Stack spacing={2} direction="row">
        <IconButton aria-label='send'>
          <SendIcon color="success" /> 
        </IconButton>
      </Stack>
    </Fragment>
  )
}
