import React, {Fragment, useState} from 'react'
import {Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import {FormatBold as FormatBoldIcon, FormatItalic as FormatItalicIcon, FormatUnderlined as FormatUnderlinedIcon} from '@mui/icons-material';


export const M04_ToggleButton = () => {
  const [formatos, setFormatos] = useState([])
  const [formatosExclusivo, setFormatosExclusivo] = useState(null)



  console.log(formatos)
  const handleFormatChange = (e, nuevoFormato) => {
    setFormatos(nuevoFormato)
  }

  console.log(formatosExclusivo)
  const handleFormatChangeExclusivo = (e, nuevoFormato) => {
    setFormatosExclusivo(nuevoFormato)
  }


  return (
    <Fragment>
      <Stack direction="row">
        <ToggleButtonGroup 
          aria-label='text Formatting' 
          value={formatos}
          color='warning'
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label='bold'>
            <FormatBoldIcon/>
          </ToggleButton>
          <ToggleButton value="italic" aria-label='italic'>
            <FormatItalicIcon/>
          </ToggleButton>
          <ToggleButton value="underline" aria-label='underline'>
            <FormatUnderlinedIcon/>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack> 


      {/* Exclusive */}     
      <Stack direction="row">
        <ToggleButtonGroup 
          aria-label='text Formatting' 
          value={formatosExclusivo}
          color='warning'
          orientation='vertical'
          onChange={handleFormatChangeExclusivo}
          exclusive
        >
          <ToggleButton value="bold" aria-label='bold'>
            <FormatBoldIcon/>
          </ToggleButton>
          <ToggleButton value="italic" aria-label='italic'>
            <FormatItalicIcon/>
          </ToggleButton>
          <ToggleButton value="underline" aria-label='underline'>
            <FormatUnderlinedIcon/>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>      
    </Fragment>
  )
}
