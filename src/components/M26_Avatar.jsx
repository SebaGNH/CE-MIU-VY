import React from 'react'
import { Stack, Avatar, AvatarGroup } from '@mui/material'

export const M26_Avatar = () => {
  return (
    <Stack spacing={2}>
      <Stack direction='row' spacing={1}>
        <Avatar>SM</Avatar>
        <Avatar sx={{bgcolor: 'primary.light'}}>BW</Avatar>
        <Avatar sx={{bgcolor: 'success.main'}}>CK</Avatar>
      </Stack>

      {/* Segunda fila */}
      <Stack direction='row' spacing={1}>
        <AvatarGroup>
          <Avatar 
            src='https://randomuser.me/api/portraits/women/11.jpg'
            alt='Jane Doe'
          >AF
          </Avatar>

          <Avatar 
            src='https://randomuser.me/api/portraits/men/57.jpg'
            alt='Jane Doe'
          >AF
          </Avatar>
          <Avatar 
            src='https://randomuser.me/api/portraits/men/13.jpg'
            alt='Jane Doe'
          >AF
          </Avatar>
        </AvatarGroup>
      </Stack>

      {/* Tercer fila */}
      {/* Máximo 3 "globos" */}
      <Stack direction='row' spacing={1}>
        <AvatarGroup max={3}>
          <Avatar 
            src='https://randomuser.me/api/portraits/men/11.jpg'
            alt='Jane Doe'
          >AF
          </Avatar>

          <Avatar 
            src='https://randomuser.me/api/portraits/women/57.jpg'
            alt='Jane Doe'
          >AF
          </Avatar>
          <Avatar 
            src='https://randomuser.me/api/portraits/women/13.jpg'
            alt='Jane Doe'
          >AF
          </Avatar>
          <Avatar 
            src='https://randomuser.me/api/portraits/men/63.jpg'
            alt='Jane Doe'
          >AF
          </Avatar>
        </AvatarGroup>
      </Stack>

      {/* Cuarta fila */}
      <Stack direction='row' spacing={1}>
        <Avatar
          sx={{ width: 48, height: 48}}
        >BN</Avatar>
        <Avatar 
          sx={{bgcolor: 'secondary.light', width: 48, height: 48}}
        >SD</Avatar>
        <Avatar
          sx={{ width: 48, height: 48}}
          variant='square'
        >FT</Avatar>
        <Avatar
          sx={{ width: 48, height: 48}}
          variant='rounded'
        >NG</Avatar>
      </Stack>
    </Stack>
  )
}
