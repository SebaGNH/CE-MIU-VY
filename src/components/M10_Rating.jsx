import React, { useState} from 'react'
import { Box, Stack, Rating } from '@mui/material'
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';

const M10_Rating = () => {
  const [valor, setValor] = useState(null)
  
  const handleChange = (e, nuevoValor) => {
    setValor(nuevoValor)
  }
  console.log({valor})

  return (
    <Stack spacing={2}>
      {/* Estrellas completas */}
      <Box>
        <Rating value={valor} onChange={handleChange}/>
      </Box>


      {/* Estrellas y media */}
      <Box>
        <Rating value={valor} onChange={handleChange} precision={0.5}/>
      </Box>


      {/* usando Iconos */}
      <Box>
        <Rating 
          value={valor} 
          onChange={handleChange}          
          icon={<FavoriteIcon  fontSize="inherit" color='error'/>}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
          />
      </Box>

      {/* ReadOnly */}
      <Box>
        <Rating 
          value={valor} 
          onChange={handleChange} 
          readOnly
        />
      </Box>


      {/* highlightSelectedOnly */}
      <Box>
        <Rating 
          value={valor} 
          onChange={handleChange} 
          highlightSelectedOnly
        />
      </Box>
    </Stack>
  )
}

export default M10_Rating