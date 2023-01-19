import React, {Fragment, useState} from 'react'
import {Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import {FormatBold as FormatBoldIcon, FormatItalic as FormatItalicIcon, FormatUnderlined as FormatUnderlinedIcon} from '@mui/icons-material';


export const M04_ToggleButton = () => {
  const [formatos, setFormatos] = useState([])
  console.log(formatos)
  const handleFormatChange = (e, nuevoFormato) => {
    setFormatos(nuevoFormato)
  }


  return (
    <Fragment>
      <Stack direction="row">
        <ToggleButtonGroup 
          aria-label='text Formatting' 
          value={formatos}
          onChange={handleFormatChange}
        >
          <ToggleButton value="bold" aria-label='bold'>
            <FormatBoldIcon color='warning'/>
          </ToggleButton>
          <ToggleButton value="italic" aria-label='italic'>
            <FormatItalicIcon color='warning'/>
          </ToggleButton>
          <ToggleButton value="underline" aria-label='underline'>
            <FormatUnderlinedIcon color='warning'/>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>      
    </Fragment>
  )
}
