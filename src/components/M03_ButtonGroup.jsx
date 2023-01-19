import React, {Fragment} from 'react'
import { Button, Stack, ButtonGroup } from '@mui/material'
export const M03_ButtonGroup = () => {
  return (
    <Fragment>
      <Stack direction='row' content='center'>
        <ButtonGroup variant='text'>
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row' content='center'>
        <ButtonGroup 
          variant='contained' 
          orientation='vertical' 
          size="small" 
          color='secondary'
          aria-label='texto que ayuda con la accesibilidad' 
          >
          <Button >Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

    </Fragment>
  )
}
