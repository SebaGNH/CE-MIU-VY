import React from 'react'
import { Box, Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material'

export const M16_Card = () => {
  return (
    <Box  width={400} >{/* width={300} -  width="400px"*/}
      <Card sx={{backgroundColor: '#858585'}}>
        <CardMedia
          component='img'
          height="240"
          image='https://source.unsplash.com/random'
        />

        <CardContent>
          <Typography variant='h5' component='div' gutterBottom >
            React
          </Typography>
          <Typography variant='body2' color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugit ut assumenda. Quasi, eligendi quam.
          </Typography>
        </CardContent>

        <CardActions>
          <Button size='small' variant='contained'>Compartir</Button>
          <Button size='small'>Aprender más...</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
