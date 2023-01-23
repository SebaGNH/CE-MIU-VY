import React, {Fragment} from 'react'
import { Box } from '@mui/material'
export const M12_Box = () => {
  return (
    <Fragment>
      {/* Box */}
      {/* Box: en el se puede usar "sx" para definir estilos personalizados */}
      <Box>Div Elemento</Box>
      <Box component="span">Span Elemento</Box>



      {/* sx */}
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
        sx
      </Box>
      
    </Fragment>
  )
}
