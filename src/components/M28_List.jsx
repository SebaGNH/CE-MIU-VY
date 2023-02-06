import React from 'react'
import { Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material'
import {Radio as RadioIcon} from '@mui/icons-material/';

export const M28_List = () => {
  return (
    <Box sx={{ width: '400px', bgcolor: '#404040' }}>
      <List>

        <ListItem>
          <ListItemText primary='Item 1'/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <RadioIcon />
          </ListItemIcon>
          <ListItemText primary='Item 2'/>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <RadioIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Item 3' secondary=' Secondary Text'/>
          </ListItemIcon>
        </ListItem>


        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar 
                src='https://randomuser.me/api/portraits/men/63.jpg'
                alt='Jane Doe'
              >
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Item 4' secondary=' Description Text'/>
          </ListItemIcon>
        </ListItem>


        <Divider/>
        {/* Quinto */}
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar 
                  src='https://randomuser.me/api/portraits/women/63.jpg'
                  alt='Jane Doe'
                >
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Button' secondary='This is a button'/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>


        <Divider/>
        {/* Sexto disablePadding*/}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar 
                  src='https://randomuser.me/api/portraits/women/85.jpg'
                  alt='Jane Doe'
                >
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Button' secondary='This is a button'/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  )
}
