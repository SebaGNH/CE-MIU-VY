import React, { useState } from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import {Face as FaceIcon, StarHalf} from '@mui/icons-material';


export const M29_Chip = () => {
  const [myChip, setmyChip] = useState(['Chip 1','Chip 2', 'Chip 3']);

  const onDelete = (chipToDelete) => {
    setmyChip(chip => chip.filter(chip => chip !== chipToDelete))
  }

  return (
    <>
      <Stack direction='row' spacing={1}>
        <Chip label='Chip 1' color='primary'/>
        <Chip label='Chip 2' color='primary' size='small'/>
        <Chip label='Chip 3' color='warning' size='small' variant='outlined'/>
        <Chip 
          label='Chip 4' 
          color='warning' 
          size='small' 
          variant='outlined'
          avatar={<Avatar>V</Avatar>}
        />
        <Chip 
          label='Chip 5' 
          color='warning' 
          variant='outlined'
          avatar={<Avatar> <FaceIcon/> </Avatar>}
        />

        <Chip 
          label='Chip 6' 
          color='success' icon={<FaceIcon/>}
        />

        <Chip 
          label='Chip 7' 
          color='warning' 
          variant='outlined'
          avatar={  <Avatar 
              src='https://randomuser.me/api/portraits/men/63.jpg'
              alt='Jane Doe'
            > AF
            </Avatar>}
        />
      </Stack>


      {/* Segunda fila */}
      <Stack direction='row' spacing={1} my={2}>
        <Chip label='Click 1' color='info' onClick={ () => console.log('Click') }/>
        <Chip 
          label='Click Delete' 
          color='error' 
          onClick={ () => console.log('Click button') }
          onDelete={ () => console.log('Delete') }
          />
          
      
      </Stack>
      <Stack direction='row' spacing={1} my={2}>
        { 
          myChip.map( (chip) => (
            <Chip 
              key={chip}
              label={chip}
              color='secondary'
              onDelete={ () => onDelete(chip)}
              />
          ))
        }
      </Stack>
    </>
  )
}
