import React, { useState } from "react";
import InfoHacienda from "./InfoHacienda";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import BarraEspacio from "./Stepper";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


const BaseGravable = ()=>{
    const [values,setValues] = useState([])
    const paso = 2

    return(
        <>
            <Grid container spacing={2} rowSpacing={4}>
                <Grid item xs={12}>
                    <InfoHacienda/>
                </Grid>
                <Grid item xs={12}>
                    <BarraEspacio pagina={paso} />
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Total Ingresos Ordinarios y Extraordinarios del Periodo en Todo el Pais</InputLabel>
                        <OutlinedInput
                            id="TotalIngresos"
                            
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Total Ingresos Ordinarios y Extraordinarios del Periodo en Todo el Pais"/>
                    </FormControl>

                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>menos: Ingresos Fuera de Este Municipio o Distrito</InputLabel>
                        <OutlinedInput
                            id="IngresosFuera"
                          
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="menos: Ingresos Fuera de Este Municipio o Distrito"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Total Ingresos Ordinarios y Extraordinarios en Este Municipio (Renglón 8-9)</InputLabel>
                        <OutlinedInput
                            disabled={true}
                            id="TotalIngresos"
                
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Total Ingresos Ordinarios y Extraordinarios en Este Municipio (Renglón 8-9)"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>menos: Ingresos Por Devolución, Rebajas, Descuentos</InputLabel>
                        <OutlinedInput
                            id="TotalIngresos"
                  
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="menos: Ingresos Por Devolución, Rebajas, Descuentos"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>menos: Ingresos Por Exportaciones</InputLabel>
                        <OutlinedInput
                            id="TotalIngresos"
    
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="menos: Ingresos Por Exportaciones"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>menos: Ingresos Por Venta de Activos Fijos</InputLabel>
                        <OutlinedInput
                            id="TotalIngresos"
       
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="menos: Ingresos Por Venta de Activos Fijos"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>menos: Ingresos Por Actividades Excluidas o No Sujetas y Otros Ingresos No Gravados</InputLabel>
                        <OutlinedInput
                            id="TotalIngresos"

                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="menos: Ingresos Por Actividades Excluidas o No Sujetas y Otros Ingresos No Gravados"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>menos: Ingresos Por Otras Actividades Exentas en Este Municipio o Distrito (Por Acuerdo)</InputLabel>
                        <OutlinedInput
                            id="TotalIngresos"
       
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="menos: Ingresos Por Otras Actividades Exentas en Este Municipio o Distrito (Por Acuerdo)"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>TOTAL INGRESOS GRAVABLES (Renglón 10 Menos 11, 12, 13, 14 y 15)</InputLabel>
                        <OutlinedInput
                            id="TotalIngresos"
                      
                            //onChange={handleChange('amount')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="TOTAL INGRESOS GRAVABLES (Renglón 10 Menos 11, 12, 13, 14 y 15)"/>
                    </FormControl>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </>
    )
}

export default BaseGravable