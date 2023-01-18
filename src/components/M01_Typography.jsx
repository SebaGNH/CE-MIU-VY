import React, {Fragment} from 'react'
import { Typography} from '@mui/material'

export const M01_Typography = () => {
  return (
    <Fragment>
      <Typography variant='h1'>H1 Heading</Typography>
      <Typography variant='h2'>H2 Heading</Typography>
      <Typography variant='h3'>H3 Heading</Typography>
      <Typography variant='h4'>H4 Heading</Typography>
      {/* gutterBottom = margin bottom */}
      <Typography variant='h4' gutterBottom>H4 gutterBottom</Typography>
      <Typography variant='h5'>H5 Heading</Typography>
      <Typography variant='h6'>H6 Heading</Typography>


      {/* También son h6 pero con diferentes estilos */}
      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>

      {/* Parrafos */}
      <Typography variant='body1'>Parrafos 1 - 1rem =  16px</Typography>
      <Typography variant='body2'>Parrafos 2 - 0.875rem = 14px </Typography>
    </Fragment>
  )
}
