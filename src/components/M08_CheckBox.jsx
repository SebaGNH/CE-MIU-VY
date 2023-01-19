import React, {useState} from 'react'
import { Box, FormControlLabel, Checkbox, Stack, FormGroup, FormControl, FormLabel } from '@mui/material'
import {Bookmark as BookmarkIcon, BookmarkBorder as BookmarkBorderIcon} from '@mui/icons-material';



export const M08_CheckBox = () => {
  const [aceptarTerminos, setAceptarTerminos] = useState(false);
  const [habilidades, setHabilidades] = useState([])


  //console.log(aceptarTerminos);

  const handleChange = (e) => {
    setAceptarTerminos(e.target.checked);
  }

  const handleHabilidadCambio = (e) => {
    setHabilidades([...habilidades, e.target.value])

  }
  console.log(habilidades)

  return (
    <Stack>
      <Box>
        <FormGroup >
          <FormControlLabel 
            label="Acepto Terminos"
            control={
              <Checkbox 
                defaultChecked
                onChange={handleChange}
              />
            }  />
        </FormGroup>
      </Box>
      <Box>
        <Checkbox  
          label="Acepto todos los terminos"
          icon={<BookmarkBorderIcon />} 
          checkedIcon={<BookmarkIcon />} 
          onChange={handleChange}
        />
      </Box>


      <Box>
        <FormControl>
          <FormLabel>Habilidades</FormLabel>
            <FormGroup row>
              <FormControlLabel 
                label="HTML"
                control={
                  <Checkbox 
                    value="html"
                    onChange={handleHabilidadCambio}
                  />
                }  
              />
              <FormControlLabel 
                label="CSS"
                control={
                  <Checkbox 
                    value="css"
                    onChange={handleHabilidadCambio}
                  />
                }  
              />
              <FormControlLabel 
                label="JavaScript"
                control={
                  <Checkbox 
                    value="javascript"
                    onChange={handleHabilidadCambio}
                  />
                }  
              />
          </FormGroup>
        </FormControl>
      </Box>
    </Stack>
  )
}


/* Falta verificar el checkbox group */
