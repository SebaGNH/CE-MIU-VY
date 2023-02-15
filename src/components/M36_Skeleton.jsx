import React,{ useState, useEffect } from 'react'
import { Stack, Skeleton, Box, Avatar, Typography } from '@mui/material'

export const M36_Skeleton = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
    
  }, [])
  

  return (
    <>
    <Stack spacing={1} width='250px'>
      <Stack spacing={1}>
        <Skeleton />

        {/* Se usa para textos */}
        <Skeleton variant='text'/>

        {/* para avatars */}
        <Skeleton variant='circular' width={40} height={40}/>

        {/* Se usa para imágenes */}
        <Skeleton variant='rectangular' width={250} height={120}/>
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant='rectangular' width={99} height={70} animation='wave'/>
        <Skeleton variant='rectangular' width={99} height={70} animation='pulse'/>
        <Skeleton variant='rectangular' width={99} height={70} animation={false}/>
      </Stack>
    </Stack>
    <Box sx={{ width: '250px', my: 5 }}>
      {
        isLoading ?
          <Skeleton 
            variant='rectangular' 
            width={256}
            height={144} 
            animation='wave'
          />
        : 
          <img 
            src='https://source.unsplash.com/random/256x144'
            alt='Skeleton'
            width={256}
            height={144} 
            animation='wave'
          />
      }
      <Stack spacing={1} direction='row' sx={{ width: '100%', marginTop: '12px'}}>
        {
          isLoading?
            <Skeleton variant='circular'  width={40} height={40} animation='wave'/>
          :
            <Avatar>CG</Avatar>
        }
      </Stack>


      <Stack sx={{ width: '80%'}}>
        {
          isLoading?
          <>
            <Typography variant='body1'>
              <Skeleton variant='text' width='100%' animation='wave'/>
            </Typography>
            <Typography variant='body2'>
              <Skeleton variant='text' width='100%' animation='wave'/>
            </Typography>
          </>
          :
          <Typography variant='body1'>Tutorial MUI</Typography>
        }
      </Stack>
    </Box>
    </>
  )
}
