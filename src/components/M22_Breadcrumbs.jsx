import React from 'react'
import { Box, Breadcrumbs,Link, Typography } from '@mui/material'
import {NavigateNext as NavigateNextIcon} from '@mui/icons-material';



export const M22_Breadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs 
        aria-label='breadcrumb' 
        separator={<NavigateNextIcon fontSize='small'/>}
      >
        <Link underline='hover' href='#'>Inicio</Link>
        <Link underline='hover' href='#'>Catalogo</Link>
        <Link underline='hover' href='#'>Accesorios</Link>
        <Typography color='text.primary'>Zapatos</Typography>
      </Breadcrumbs>

      {/* Segundo elemento */}
      <Breadcrumbs 
        aria-label='breadcrumb' 
        separator={<NavigateNextIcon fontSize='small'/>}
        maxItems={2}
      >
        <Link underline='hover' href='#'>Inicio</Link>
        <Link underline='hover' href='#'>Catalogo</Link>
        <Link underline='hover' href='#'>Accesorios</Link>
        <Typography color='text.primary'>Zapatos</Typography>
      </Breadcrumbs>

      {/* Tercer elemento */}
      <Breadcrumbs 
        aria-label='breadcrumb' 
        separator={<NavigateNextIcon fontSize='small'/>}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link underline='hover' href='#'>Inicio</Link>
        <Link underline='hover' href='#'>Catalogo</Link>
        <Link underline='hover' href='#'>Accesorios</Link>
        <Typography color='text.primary'>Zapatos</Typography>
      </Breadcrumbs>


      {/* Cuarto elemento */}
      <Breadcrumbs 
        aria-label='breadcrumb' 
        separator={<NavigateNextIcon fontSize='small'/>}
        maxItems={3}
        itemsBeforeCollapse={2}
      >
        <Link underline='hover' href='#'>Inicio</Link>
        <Link underline='hover' href='#'>Catalogo</Link>
        <Link underline='hover' href='#'>Accesorios</Link>
        <Typography color='text.primary'>Zapatos</Typography>
      </Breadcrumbs>
    </Box>
  )
}

/* 


Se usa para jerarquía cuando un  elemento está adentro de otro, como una ruta 


separator='-'  // Con este podemos cambiar el dibujo separador

- También podemos usar  íconos
separator={<NavigateNextIcon fontSize='small'/>}

maxItems={2} muestra el máximo de elementos a mostrar, entre 2 o 3 no hay diferencia



itemsAfterCollapse={2}

itemsBeforeCollapse={2}
*/
