import React, { useState } from "react";
import InfoHacienda from "./InfoHacienda";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import BarraEspacio from "./Stepper";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';


const ActividadesGravadas = ()=>{

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
        </Grid>
        <Grid item xs={12}>
            
        </Grid>
    </>
    )
}

export default ActividadesGravadas