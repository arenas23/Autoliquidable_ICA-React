import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'


const TablaActividades = (props)=>{

var datos = []
datos=props.filas

const pepe=()=>{
    datos.map((dato)=>{
        if(dato.codigo==)
    })
}


    return(
        <TableContainer component={Paper} sx={{backgroundColor:'#cdcdcd'}}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>ACTIVIDAD</TableCell>
                        <TableCell align="right">CODIGO</TableCell>
                        <TableCell align="right">INGRESOS GRAVADOS</TableCell>
                        <TableCell align="right">TARIFA X MIL</TableCell>
                        <TableCell align="right">IMPUESTO</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {datos.map((dato) => (
                    <TableRow
                    key={dato.actividad}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {dato.codigo}
                    </TableCell>
                    <TableCell align="right">{dato.codigo}</TableCell>
                    <TableCell align="right">${dato.ingresosGravados}</TableCell>
                    <TableCell align="right">{dato.tarifa}</TableCell>
                    <TableCell align="right">${dato.impuesto}</TableCell>
                    <TableCell align='right'><Button onClick={()=>{pepe}} >pepe</Button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TablaActividades