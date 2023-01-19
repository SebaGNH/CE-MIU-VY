import React,{Fragment, useState} from 'react'
import {Stack, Box, TextField, MenuItem, FormControl, InputLabel, Select } from '@mui/material'

export const M06_Select = () => {
  const [edad, setEdad] = useState('');
  const [dia, setDia] = useState('');
  const [pais, setPais] = useState([])
  
  

  const handleChange = (e) => {
    setEdad(e.target.value);
  };
  console.log(edad);


  const handleChangePais = (e) => {
    const valor = e.target.value;
    setPais(typeof valor === 'string' ? valor.split(","): valor);
  }

  const handleChangeDia = (e) => {   
    setDia(e.target.value);
  }
  console.log(dia);

  return (
    <Fragment>
      <Stack direction="row" spacing={2}> 
        {/* Día */}
        <Box width='250px'>
          <TextField
            select
            label="Seleccione Día"
            value={dia}
            onChange={handleChangeDia}
            fullWidth
            helperText='Por favor seleccione un día'
          >
            <MenuItem value="Lunes">Lunes</MenuItem>
            <MenuItem value="Martes">Martes</MenuItem>
            <MenuItem value="Miercoles">Miercoles</MenuItem>
          </TextField>
        </Box>

        {/* Paises */}
        <Box width='250px'>
          <TextField
            select
            label="Seleccione multiple país arreglo"
            value={pais}
            onChange={handleChangePais}
            fullWidth
            SelectProps={{
              multiple: true
            }}
          >
            <MenuItem value="Argentina">Argentina</MenuItem>
            <MenuItem value="Chile">Chile</MenuItem>
            <MenuItem value="Uruguay">Uruguay</MenuItem>
          </TextField>
        </Box>


        {/* Edad */}
        <Box sx={{ minWidth: 250 , maxWidth: 300 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Edad</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={edad}
              label="Edad"
              onChange={handleChange}
              size="small"
              color='secondary'
            >
              <MenuItem value={10}>Dies</MenuItem>
              <MenuItem value={20}>Veinte</MenuItem>
              <MenuItem value={30}>Treinta</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Fragment>
  )
}
