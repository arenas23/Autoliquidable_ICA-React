import React, { useState } from "react";
import InfoHacienda from "./InfoHacienda";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import BarraEspacio from "./Stepper";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import NavigationIcon from '@mui/icons-material/Navigation';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import TablaActividades from "./TablaActividades";

const ActividadesGravadas = ()=>{

    const [rows,setRows] = useState([])
    const [codigo,setCodigo]=useState('')
    const [gravado,setGravado] = useState('')
    const [tarifa,setTarifa] = useState('')
    const [impuesto,setImpuesto] = useState('')
    var dato=[]

    function createData(actividad, codigo, ingresosGravados,tarifa, impuesto) {
        return {actividad, codigo, ingresosGravados,tarifa, impuesto};
      }

      const agregarFila= ()=>{
        rows.map((row)=>{
            dato.push(row)
        })
         dato.push(createData("gerat",codigo,gravado,tarifa,impuesto))
        setRows(dato)

      }

    const paso =3
    return(
    <>
        <Grid container spacing={2} rowSpacing={4}>
            <Grid item xs={12}>
                <InfoHacienda/>
            </Grid>
            <Grid item xs={12}>
                <BarraEspacio pagina={paso} />
            </Grid>
            <Grid item xs={8}>
                <FormControl fullWidth>
                    <InputLabel>Actividad </InputLabel>
                    <Select
                        label="Actividad">
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <TextField id="Codigo" label="Codigo" variant="standard" onChange={()=>{setCodigo(event.target.value)}}/>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                <InputLabel>Ingresos Gravados</InputLabel>
                <OutlinedInput
                    id="IngresosGravados"
                    onChange={()=>{setGravado(event.target.value)}}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Ingresos Gravados"/>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                <InputLabel>Tarifa X Mil</InputLabel>
                <OutlinedInput
                    id="IngresosGravados"
                    onChange={()=>{setTarifa(event.target.value)}}
                    endAdornment={<InputAdornment position='end'>X 1000</InputAdornment>}
                    label="Tarifa X Mil"/>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                <InputLabel>Impuesto</InputLabel>
                <OutlinedInput
                    id="IngresosGravados"
                    onChange={()=>{setImpuesto(event.target.value)}}
                    startAdornment={<InputAdornment position='start'>$</InputAdornment>}
                    label="Impuesto"
                    />
                </FormControl>
            </Grid>
            <Grid item x={3}>
                <Fab color="success" variant="extended" onClick={()=>{agregarFila()}}>
                    <AddIcon />
                        agregar actividad
                </Fab>
            </Grid>
            <Grid item xs={12}>
                <TablaActividades filas={rows} funcion={setRows}/>
            </Grid>
        </Grid>
       
    </>
    )
}

export default ActividadesGravadas