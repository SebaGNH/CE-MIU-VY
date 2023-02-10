import React from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'
import { tableData } from './index'

export const M31_Table = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '400px'}}>
      <Table aria-aria-label='Simple Table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align='center'>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tableData.map((data) => (
              <TableRow 
                key={data.id}
                sx={{'&:last-child td, &:last-child th': { border:0 }, 
                '&:nth-of-type(odd)': { background: '#eeeeee'}}}
              >
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.first_name}</TableCell>
                <TableCell>{data.last_name}</TableCell>
                <TableCell align='center'>{data.email}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

/*

- Limitamos el alto de la tabla
<TableContainer component={Paper} sx={{maxHeight: '400px'}}>

*/



