import React from 'react'
import { Stack, Link, Typography } from '@mui/material'

export const M21_Link = () => {
  return (
    <Stack spacing={2} direction='row' m={4}>
      <Link href='#'>link</Link>

      <Link href='#' color='secondary' underline='hover'>Secondary</Link>

      <Typography variant='h5'>
        <Link href='#' underline='none'>link 3</Link>
      </Typography>

      <Link href='#' variant='body2'>link 4</Link>

    </Stack>
  )
}


/* 
underline='hover' - Subrayado solo al hacer hover
underline='none' - no tendrá subrayado

*/