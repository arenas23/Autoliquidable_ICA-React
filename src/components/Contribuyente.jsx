import React, { useState, useEffect } from "react";
import InfoHacienda from "./InfoHacienda";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import BarraEspacio from "./Stepper";
import TipoDocumento from "../components/TipoDocumento"
import TextField from '@mui/material/TextField';
import NombreRazon from '../components/NombreRazon'
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from "axios";

const Contribuyente = ()=>{
    const [tipo,setTipo] = useState([0,false])
    const [municipios, setMunicipios] = useState([])
    const [ciudad, setCiudad] = useState([])
    const paso = 1

    useEffect(() => {
        axios
          .get(
            `http://201.184.190.109:1377/apiautoliquidable/api/Generales/GetDepartamentos`
          )
          .then((res) => {
            setMunicipios(res.data);
          });
      }, []);
    
      const ciudadesMunicipio = (te) => {
        setCiudad(
          municipios.find((x) => {
            return x.Id == te.value
          }).Ciudades
        );
      };

    const NitChecked=(e)=>{
        if(e){
            setTipo([0,false])
        }
    }

    const OtherChecked=(e)=>{
        if(e){
            setTipo([1,true])
        }
    }
    return(
        <>
            <Grid container spacing={2} rowSpacing={4}>
                <Grid item xs={12}>
                    <InfoHacienda/>
                </Grid>
                <Grid item xs={12}>
                    <BarraEspacio pagina={paso} />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Tipo Documento</FormLabel>
                        <RadioGroup
                            row
                            name="row-radio-buttons-group">
                            <FormControlLabel value="Nit" control={<Radio id="NT" onClick={()=>{NitChecked(event.target.checked)}} />} label="Nit" />
                            <FormControlLabel value="CC" control={<Radio  onClick={()=>{OtherChecked(event.target.checked)}} />} label="Cedula Ciudadania" />
                            <FormControlLabel value="TI" control={<Radio  onClick={()=>{OtherChecked(event.target.checked)}} />} label="Tarjeta Identidad" />
                            <FormControlLabel value="CE" control={<Radio  onClick={()=>{OtherChecked(event.target.checked)}} />} label="Cedula Extranjeria"/>
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <TextField id="Documento" label="Ingrese Documento" variant="standard" />
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <TextField id="Dv" label="DV" variant="standard" disabled={tipo[1]}/>
                    </FormControl>
                </Grid>
                <NombreRazon tipo={tipo[0]}/>
                <Grid item xs={12}>
                    <div className="fon-sz-24 txt-center">
                        <span>Direccion de Notificacion o del Establecimiento </span>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <TextField id='Direccion' label='Direccion' variant='standard'/>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel>Departamento </InputLabel>
                        <Select 
                            label="Departamento" 
                            onChange={() => {
                                ciudadesMunicipio(event.target.dataset);
                            }}>
                            {municipios.map((municipio) => {
                                return (
                                <MenuItem value={municipio.Id} key={municipio.Id}>
                                    {municipio.NombreDepartamento}
                                </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={4}>
                    <FormControl fullWidth>
                        <InputLabel>Municipio</InputLabel>
                        <Select label="Municipio">
                            {ciudad.map((ciudad) => {
                                return (
                                <MenuItem value={ciudad.NombreCiudad}>
                                    {ciudad.NombreCiudad}
                                </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField id='Telefono' label='Telefono' variant='standard'/>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <TextField id='Correo' label='Correo' variant='standard'/>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <TextField id='Establecimientos' label='Numero de Establecimientos' variant='standard'/>
                    </FormControl>
                </Grid>
                <Grid item xs={5}>
                    <FormControl fullWidth>
                        <InputLabel>Clasificacion Contribuyente</InputLabel>
                        <Select label="Clasificacion Contribuyente">
                            <MenuItem value="Responsable de IVA">Responsable de IVA</MenuItem>
                            <MenuItem value="Responsable de IVA">No Responsable de IVA</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>

                </Grid>
            </Grid>
        </>
    )
}

export default Contribuyente