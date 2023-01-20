import React, { useState} from 'react'
import { Box, FormControlLabel, Switch } from '@mui/material'



export const M09_Switch = () => {
  const [checked, setchecked] = useState(false)


  const handleChangeCheck = (e) => {
    setchecked(e.target.checked)
  }
  console.log({checked})


  return (
    <Box>
      <FormControlLabel 
        label="Dark Mode" 
        control={<Switch/>}
        onChange={handleChangeCheck}
      />
    </Box>
  )
}