import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from "@mui/material/Grid";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const TablaActividades = (props)=>{

    
    var datos = []
    var pagina=0
// datos=props.filas
    datos=[...props.filas]
    pagina=props.pagina

    const buscarIndice=(codigo)=>{

        const index = datos.findIndex(row =>row.codigo===codigo)
        datos.splice(index,1)
        console.log(datos)
        props.actualizar(datos)
    }


    return(
        <>
            <TableContainer component={Paper} sx={{backgroundColor:'#F2F3F4'}}>
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
                    {pagina == 0 ?
                        datos
                        .slice(0,7)
                        .map((dato) => (
                            <TableRow key={dato.actividad} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row"> {dato.actividad}</TableCell>
                                <TableCell align="right">{dato.codigo}</TableCell>
                                <TableCell align="right">${dato.ingresosGravados}</TableCell>
                                <TableCell align="right">{dato.tarifa}</TableCell>
                                <TableCell align="right">${dato.impuesto}</TableCell>
                                {/* <TableCell align='right'><Button color="error" variant="contained" onClick={()=>{buscarIndice(dato.codigo)}} >BORRAR</Button></TableCell> */}
                                <TableCell allign="right"><IconButton color='error' onClick={()=>{buscarIndice(dato.codigo)}}><DeleteForeverIcon/></IconButton></TableCell>
                            </TableRow>
                        )) :
                        datos
                        .slice(7)
                        .map((dato) => (
                            <TableRow key={dato.actividad} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row"> {dato.actividad} </TableCell>
                                <TableCell align="right">{dato.codigo}</TableCell>
                                <TableCell align="right">${dato.ingresosGravados}</TableCell>
                                <TableCell align="right">{dato.tarifa}</TableCell>
                                <TableCell align="right">${dato.impuesto}</TableCell>
                                {/* <TableCell align='right'><Button color="error" variant="contained" onClick={()=>{buscarIndice(dato.codigo)}} >BORRAR</Button></TableCell> */}
                                <TableCell allign="right"><IconButton color='error' onClick={()=>{buscarIndice(dato.codigo)}}><DeleteForeverIcon/></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Grid container spacing={2} rowSpacing={4}>
                    <Grid item xs={1} textAlign="left">
                        <IconButton onClick={()=>{props.setPagina(0)}} color='primary'><ArrowBackIosIcon/></IconButton>
                    </Grid>
                    <Grid item xs={10} textAlign='center'>
                        <div>ACTIVIDADES: {datos.length} </div>
                    </Grid>
                    <Grid item xs={1} textAlign="right" >
                        <IconButton onClick={()=>{props.setPagina(1)}} color='primary'><ArrowForwardIosIcon/></IconButton>
                    </Grid>
                </Grid>
            </TableContainer>
            
           
    </>
    )
}

export default TablaActividades