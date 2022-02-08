import * as React from 'react';
import Table from '@material-ui/core//Table';
import TableBody from '@material-ui/core//TableBody';
import TableCell from '@material-ui/core//TableCell';
import TableContainer from '@material-ui/core//TableContainer';
import TableHead from '@material-ui/core//TableHead';
import TableRow from '@material-ui/core//TableRow';
import Paper from '@material-ui/core//Paper';


export default function BasicTable( {data} ) {

  const data1= data.items
  const preperedData = Object.keys(data.items)
  console.log("preperedData",preperedData)

  const arrINeed = preperedData.reduce((acc, cur)=> {
    return [...acc, {...data1[cur], id: cur}]
  }, [])
  console.log("arrINeed",arrINeed)

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ip-адрес</TableCell>
            <TableCell align="right">Мак Адрес</TableCell>
            <TableCell align="right">Название сети</TableCell>
            <TableCell align="right">Vendor</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {arrINeed.map((row) => (
            <TableRow
              key={arrINeed.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{row.id ? row.id : <span> не распознано</span>}</TableCell>
              <TableCell align="right">{row.mac_addr?row.mac_addr  : <span> не распознано</span>}</TableCell>
              <TableCell align="right">{row.network_name ? row.network_name : <span> не распознано</span>}</TableCell>
              <TableCell align="right">{row.vendor? row.vendor : <span> не распознано</span>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}