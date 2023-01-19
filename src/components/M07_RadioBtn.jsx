import React,{Fragment, useState} from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material'
import { Label } from '@mui/icons-material'

export const M07_RadioBtn = () => {
  const [valor, setValor] = useState("");
  console.log(valor)
  console.log({valor}) /* Devuelve como un objeto */


  const handleChange = (e) => {
    setValor(e.target.value)
  }


  return (
    <Fragment>
      <Box>
        <FormControl>
          <FormLabel id='rb_experiencia'>
            Años de Experiencia
          </FormLabel>
          <RadioGroup 
            name='rb_experiencia'
            aria-labelledby='Experiencia trabajos'
            value={valor}
            onChange={handleChange}
            row
            >
              <FormControlLabel control={<Radio/>} label="0-2" value="0-2"/>
              <FormControlLabel control={<Radio/>} label="3-5" value="3-5"/>
              <FormControlLabel control={<Radio/>} label="6-10" value="6-10"/>
          </RadioGroup>
        </FormControl>
      </Box>


      <Box>
        <FormControl error>
          <FormLabel id='rb_experiencia'>
            Años de Experiencia
          </FormLabel>
          <RadioGroup 
            name='rb_experiencia'
            aria-labelledby='Experiencia trabajos'
            value={valor}
            onChange={handleChange}
            row
            >
              <FormControlLabel control={<Radio size='small'/>} label="0-2" value="0-2"/>
              <FormControlLabel control={<Radio size='small'/>} label="3-5" value="3-5"/>
              <FormControlLabel control={<Radio  size='small'/>} label="6-10" value="6-10"/>
          </RadioGroup>
          <FormHelperText>Mensajes de error</FormHelperText>
        </FormControl>
      </Box>
    </Fragment>
  )
}


/* 
row con row los ponemos en fila

*/