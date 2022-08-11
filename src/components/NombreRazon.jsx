import React from 'react'
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';

const NombreRazon = (props)=>{
    if(props.tipo == 0){
        return (
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <TextField id="RazonSocial" label="Razon Social" variant="standard" />
                </FormControl>
            </Grid>
        )
    }else{
        return(
            <>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <TextField id='PrimerNombre' label='Primer Nombre' variant='standard'></TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <TextField id='SegundoNombre' label='Segundo Nombre' variant='standard'></TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <TextField id='PrimerApellido' label='Primer Apellido' variant='standard'></TextField>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl fullWidth>
                        <TextField id='SegundoApellido' label='Segundo Apellido' variant='standard'></TextField>
                    </FormControl>
                </Grid>
            </>

        )
    }

}

export default NombreRazon