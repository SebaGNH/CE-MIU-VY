import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import { CatchingPokemon as CatchingPokemonIcon } from '@mui/icons-material';


export const M20_Menu = () => {
  const [elementoAncla, setElementoAncla] = useState(null)
  const isOpen = Boolean(elementoAncla)

  const handleClick = (e) => {
    console.log(e.currentTarget)
  }

  const handleClose = () => {
    setElementoAncla(null)
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemonIcon/>
        </IconButton>
        <Typography 
          variant='h6' 
          component="div"
          sx={{flexGrow: 1}}
        >Pokemon App
        </Typography>
      

        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Price</Button>
          <Button color='inherit'>About</Button>
          <Button 
            color='inherit' 
            id='resources-button'
            onClick={handleClick}
            aria-control={ open ? 'resources-menu': undefined}
            aria-haspopup='true'
            aria-expanded={ open ? 'true' : undefined}
            MenuListProps={{
              'aria-labelledby' : 'resources-button'
            }}
            onClose={handleClose}
          >Resources</Button>
          <Button color='inherit'>Login</Button>
        </Stack>

        <Menu id='resources-menu'>
          <MenuItem anchorEl={elementoAncla} open={open}>Blog</MenuItem>
          <MenuItem>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
