import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Box } from '@mui/material'
import { CatchingPokemon as CatchingPokemonIcon } from '@mui/icons-material';



export const M19_NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          <Button color='inherit'>Login</Button>
        </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

/* Tiene margenes, pero es por los estilos del index.css */
