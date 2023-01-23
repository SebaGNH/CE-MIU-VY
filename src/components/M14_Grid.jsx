import { Box, Divider, Stack, Grid } from '@mui/material'
import React, { Fragment} from 'react'

export const M14_Grid = () => {
  return (
  <Fragment>
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


    {/* xs={6}. cada elemento ocupa 6 espacio de 12 */}
    {/* auto abarca el tamaño de las letras */}
    {/* columnSpacing = gap */}
    <Grid container my={4} spacing={1} columnSpacing={3}>
      <Grid item xs={6} sm={2} lg={12} >
        <Box bgcolor='primary.light' p={2}> Item 1 - p=2</Box>
      </Grid>
      <Grid item xs={6} sm={10} lg={12} >
        <Box bgcolor='primary.light' p={2}> Item 2 - p=2</Box>
      </Grid>
      <Grid item xs={3} sm={9} lg={12} >
        <Box bgcolor='primary.light' p={2}> Item 3 - p=3</Box>
      </Grid>
      <Grid item xs={9} sm={3} lg={12} >
        <Box bgcolor='primary.light' p={2}> Item 4 - p=2</Box>
      </Grid>
      <Grid item xs={3} sm={4} lg={12} >
        <Box bgcolor='primary.light' p={2}> Item 5 - p=3</Box>
      </Grid>
      <Grid item xs={9} sm="auto" lg={12} >
        <Box bgcolor='primary.light' p={2}> Item 6 - p=2</Box>
      </Grid>
    </Grid>
  </Fragment>
  )
}
