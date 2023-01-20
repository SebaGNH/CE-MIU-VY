import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

const skills = ['HTML','CSS','JavaScript','Node', 'React']
const diasSemanales = ['Lunes','Martes','Miercoles','Jueves', 'Viernes']
const frutas = ['Manzana','Banana','Pera','Higo', 'Frutilla']

const opcionesFrutas = frutas.map( (fruta, index) => ({
  id: index +1,
  label: fruta
}));

export const M11_AutoComplete = () => {
  const [valor, setValor] = useState(null)
  const [fruta, setFruta] = useState(null)

  console.log({valor})
  console.log({fruta})


  return (
    <Stack spacing={2} width="250px">
      {/* Skills */}
      <Stack>
        <Autocomplete options={skills} renderInput={ (parametros) =>         
          <TextField {...parametros} label='Skills'/>
        }/>
      </Stack>


      {/* Dias Semanales */}
      <Stack>
        <Autocomplete options={diasSemanales} renderInput={ (parametros) =>         
          <TextField {...parametros} label='Dias'/>
        }
        value={valor}
        onChange={(e, nuevoValor)=> setValor(nuevoValor)}
      />
      </Stack>


      {/* freeSolo = permite agregar nuevos, pero da warning en consola */}
      <Stack>
        <Autocomplete options={diasSemanales} renderInput={ (parametros) =>         
          <TextField {...parametros} label='Dias'/>
        }
        value={valor}
        onChange={(e, nuevoValor)=> setValor(nuevoValor)}
        freeSolo
      />
      </Stack>


      {/* usando objeto */}
      <Stack>
        <Autocomplete options={opcionesFrutas} renderInput={ (parametros) =>         
          <TextField {...parametros} label='Frutas'/>
        }
        value={fruta}
        onChange={(e, nuevoValor)=> setFruta(nuevoValor)}
        
      />
      </Stack>
    </Stack>
  )
}
