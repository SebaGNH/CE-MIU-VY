import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {Home as HomeIcon, Favorite as FavoriteIcon, Person as PersonIcon} from '@mui/icons-material/';

export const M25_BottomNavigation = () => {
  const [valor, setValor] = useState(0)
  //console.log(valor)

  return (
    <BottomNavigation 
      sx={{width: '100%', position: 'absolute', bottom: 0}}
      value={valor}
      onChange={ ( e, nuevoValor ) => {setValor(nuevoValor)}}
      showLabels
    >
      <BottomNavigationAction label='home' icon={<HomeIcon/>}/>
      <BottomNavigationAction label='favorite' icon={<FavoriteIcon/>}/>
      <BottomNavigationAction label='person' icon={<PersonIcon/>}/>
    </BottomNavigation>
  )
}
