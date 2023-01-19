import React, {Fragment,useState} from 'react'
import { InputAdornment , Stack, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import {Visibility as VisibilityIcon} from '@mui/icons-material';

export const M05_TextFields = () => {
  const [valor, setValor] = useState('');
  const [nota, setNota] = useState('');

  return (
    <Fragment>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name"/>
          <TextField label="outlined" variant='outlined'/>
          <TextField label="filled" variant='filled'/>
          <TextField label="standard" variant='standard'/>
        </Stack>

        {/* 2da Fila */}
        <Stack direction="row" spacing={2}>
          <TextField label="Small Secondary" size='small' color='secondary'/>
          <TextField label="width: '450px' " sx={{ m: 1, width: '450px' }}/>
        </Stack>

         {/* 3ra Fila */}
        <Stack direction="row" spacing={2}>
          <TextField label="required" required/>
          <TextField label="Errort" error/>
          <TextField label="HelperText" helperText='No compartir'/>
          <TextField label="HelperText" helperText='No compartir' error/>
        </Stack>

        {/* 4ta Fila */}
        <Stack direction="row" spacing={2}>
          <TextField label="Password" type="password"/>
          <TextField label="disabled" disabled/>
          <TextField label="readOnly: true" inputProps={{readOnly: true}}/>
        </Stack>

        {/* 5ta Fila */}
        <Stack direction="row" spacing={2}>
            <TextField label="Peso"
            InputProps={{ startAdornment: 
              <InputAdornment position="start">$</InputAdornment>,
            }}
          />
          <TextField label="Peso"
            InputProps={{ endAdornment: 
              <InputAdornment position="end">kg</InputAdornment>,
          }}
          />
          <TextField label="Peso"
            InputProps={{ endAdornment: 
              <InputAdornment position="end"><VisibilityIcon/></InputAdornment>,
          }}
          />
        </Stack>


         {/* 6ta Fila */}
          <Stack direction="row" spacing={2}>
            <TextField 
              label='Valor Requerido' 
              value={valor}
              required
              onChange={ (e) => setValor(e.target.value)}
              error={!valor}
              helperText={!valor? 'Requerido':''}
            />
            <TextField 
              label='Nota' 
              value={nota}
              required
              onChange={ (e) => setNota(e.target.value)}
              error={nota < 6 && nota != '' ? true : false}
              helperText={nota < 6 ? 'Reprobado':'Aprobado'}
            />
          </Stack>
        
      </Stack>

    </Fragment>
  )
}
