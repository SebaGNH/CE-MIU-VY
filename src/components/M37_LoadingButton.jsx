import React from 'react'
import { Stack, Box } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Save as SaveIcon } from '@mui/icons-material/';


export const M37_LoadingButton = () => {
  return (
    <Stack spacing={2} direction='row'>
      <Box sx={{ bgcolor: '#fff', padding: '5px' }}>
        <Stack spacing={2} direction='row'>
          <LoadingButton variant='outlined'>Submit</LoadingButton>
          <LoadingButton loading variant='outlined'>Submit</LoadingButton>

          <LoadingButton 
            variant='outlined' 
            loadingIndicator='Loading'
          >Fetch Data
          </LoadingButton>

          <LoadingButton 
            loading 
            variant='outlined' 
            loadingIndicator='Loading'
          >Fetch Data
          </LoadingButton>

          <LoadingButton 
            variant='outlined' 
            loadingPosition='start'          
            startIcon={<SaveIcon/>}
          >Save
          </LoadingButton>

          <LoadingButton 
            loading
            variant='outlined' 
            loadingPosition='start'          
            startIcon={<SaveIcon/>}
          >Save
          </LoadingButton>
        </Stack>
      </Box>
    </Stack>
  )
}


/* yarn add @mui/lab 
loading = agregando loading se grisa
*/
