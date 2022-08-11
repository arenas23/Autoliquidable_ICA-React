import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import '../styles/botonUso.scss'
import  FormControl  from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Fecha from "./Fecha";

export default function OpcionesUso() {
    const [correc,setCorrec] = React.useState(false)
    const [color,setColor]=React.useState(['primary','inherit','inherit'])

    const cambioColor=(index)=>{
    
        if(index==0){
            setColor(['primary','inherit','inherit'])
            setCorrec(false)
        }else if(index==1){
            setColor(['inherit','primary','inherit'])
            setCorrec(true)
        }else{
            setColor(['inherit','inherit','primary'])
            setCorrec(false)
        }
    }

    if(correc){

        return (
            <Grid container spacing={2} rowSpacing={4}>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <Button variant="contained" color={color[0]} onClick={()=>{cambioColor(0)}}>
                            <div className='tamano'>Declaracion Inicial</div>
                        </Button>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <Button variant="contained" color={color[1]} onClick={()=>{cambioColor(1)}}>
                            <div className='tamano'>Correcion</div>
                        </Button>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <Button variant="contained" color={color[2]} onClick={()=>{cambioColor(2)}}>
                            <div className='tamano'>Clausura</div>
                        </Button>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <TextField id="numeroCorrige" label="Numero declaracion que Corrige" variant="standard"  />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <TextField id="ValorCorrige" label="Valor declaracion que Corrige" variant="standard" />
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                    <Fecha/>
                    </FormControl>
                    
                </Grid>
            </Grid>
          );
    }else{
        return(
            <Grid container spacing={2} rowSpacing={4}>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Button variant="contained" color={color[0]} onClick={()=>{cambioColor(0)}}>
                        <div className='tamano'>Declaracion Inicial</div>
                    </Button>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Button variant="contained" color={color[1]} onClick={()=>{cambioColor(1)}}>
                        <div className='tamano'>Correcion</div>
                    </Button>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <Button variant="contained" color={color[2]} onClick={()=>{cambioColor(2)}}>
                        <div className='tamano'>Clausura</div>
                    </Button>
                </FormControl>
            </Grid>
            </Grid>
        )
       
    }


}