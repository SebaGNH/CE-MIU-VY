import { Button } from '@mui/material'
import React, {Fragment} from 'react'

export const M02_Button = () => {
  return (
    <Fragment>
      {/* Llamar poco la atención, pie de página o ventana emergente */}
      <Button variant="text">Text</Button>
      
      {/* contained se usa para llamar la atención Ej: Registro o login*/}
      <Button variant="contained">Contained</Button>

      {/* Acciones secundarias Ej Cancelar o retroceder*/}
      <Button variant="outline">outline</Button>


    </Fragment>
  )
}
