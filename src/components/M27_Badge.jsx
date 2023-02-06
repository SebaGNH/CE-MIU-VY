import React from 'react'
import { Stack, Badge } from '@mui/material'
import { Mail as MailIcon, Chat as ChatIcon, Feedback as FeedbackIcon } from '@mui/icons-material';


export const M27_Badge = () => {
  return (
    <Stack spacing={2} direction='row'>
      <Badge badgeContent={5} color='primary'>
        <MailIcon/>
      </Badge>

      {/* Muestra el cero */}
      <Badge badgeContent={0} color='error' showZero>
        <FeedbackIcon/>
      </Badge>

      
      {/* valor máximo 99 */}
      <Badge badgeContent={1000} color='success'>
        <ChatIcon/>
      </Badge>

      {/* valor máximo limitado a 500 */}
      <Badge badgeContent={1000} color='success' max={500}>
        <ChatIcon/>
      </Badge>


      {/* se usa para notificaciones */}
      <Badge variant='dot' color='primary'>
        <MailIcon/>
      </Badge>

      {/* Ocultamos el punto "dot" */}
      {/* Se usa para asignar valores y estados*/}
      {/* invisible={frutas.length === 0} */}
      <Badge variant='dot' color='primary' invisible={true}>
        <MailIcon/>
      </Badge>
    </Stack>
  )
}
