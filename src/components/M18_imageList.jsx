import React from 'react'
import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from '@mui/material'
import { itemData, itemData2, itemData3 } from './index'

export const M18_imageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{width: 750, height: 450 }}
        cols={3}
        rowHeight={164}
      >
        {
          itemData.map( item => (
            <ImageListItem key={item.img}>
              <img 
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&drp=2`}
                alt={item.title}
                loading='lazy'  
              />
              <ImageListItemBar title={item.title}/>
            </ImageListItem>
          ))
        }
      </ImageList>

      {/* Segunda lista */}
      <ImageList 
        sx={{width: 750, height: 450, backgroundColor: '#4F41C8'}}
        cols={3}
        gap={8}
        variant='woven'
      >
        {
          itemData2.map( item => (
            <ImageListItem key={item.img}>
              <img 
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&drp=2`}
                alt={item.title}
                loading='lazy'  
              />
            </ImageListItem>
          ))
        }
      </ImageList>



      {/* Tercera lista */}
      <Box
        sx={{width: 750, height: 450, overflowy: 'scroll' }}
      >
        <ImageList 
          cols={3}
          gap={8}
          variant='masonry'
        >
          {
            itemData3.map( item => (
              <ImageListItem key={item.img}>
                <img 
                  src={`${item.img}?w=248&fit=crop&auto=format&drp=2`}
                  alt={item.title}
                  loading='lazy'  
                />
              </ImageListItem>
            ))
          }
        </ImageList>
      </Box>
    </Stack>
  )
}
