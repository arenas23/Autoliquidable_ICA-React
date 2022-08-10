import React, {useState,useEffect} from "react";
import Paper from '@mui/material/Paper'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import '../styles/informacion.scss'
import FormControl  from "@mui/material/FormControl"
import Select from '@mui/material/Select'
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import BarraEspacio from "./Stepper";
import OpcionesUso from "./OpcionesUso";



const Informacion = ()=>{

    const [municipios,setMunicipios] = useState([])
    const [ciudad,setCiudad]= useState([])
    const anos= ["2019","2020","2021","2022"]
    var paso = 0


    useEffect(() =>{
        axios.get(`http://201.184.190.109:1377/apiautoliquidable/api/Generales/GetDepartamentos`)
        .then(res =>{setMunicipios(res.data)})
    },[])

const ciudadesMunicipio= (te)=>{
    setCiudad( municipios.find((x)=>{return (x.Id==te.value)}).Ciudades)
    console.log(ciudad)
}


    console.log(municipios)
    return(
        <Container maxWidth="xl">
            <Paper elevation={6} square>
                <div className="pepe">
                    <Grid container spacing={2} rowSpacing={4}>
                        <Grid item xs={12}>
                            <div className="txt-center">
                                <p className="fon-sz-30">SECRETARÍA DE HACIENDA - MUNICIPIO DE PLANETA</p>
                                <p>FORMULARIO ÚNICO NACIONAL DE DECLARACIÓN Y PAGO</p>
                                <p>DEL IMPUESTO DE INDUSTRIA Y COMERCIO</p>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <BarraEspacio pagina={paso}/>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel>Departamento </InputLabel>
                                    <Select label="Departamento"
                                         onChange={()=>{ciudadesMunicipio(event.target.dataset)}}>
                                        {municipios.map(municipio =>{
                                           return(
                                                     <MenuItem value={municipio.Id} key={municipio.Id}>
                                                        {municipio.NombreDepartamento}
                                                    </MenuItem>
                                                 )})}
                                    </Select>
                            </FormControl>
                            
                        </Grid>

                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                <InputLabel>Municipio</InputLabel>
                                <Select label="Municipio">
                                    {
                                        ciudad.map(ciudad =>{
                                            return(
                                                <MenuItem value={ciudad.NombreCiudad}>
                                                    {ciudad.NombreCiudad}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl fullWidth>
                                    <InputLabel>Ano Gravable</InputLabel>
                                    <Select label="Ano Gravable">
                                        {
                                            anos.map(ano =>{
                                                return(
                                                    <MenuItem value={ano} key={ano}>
                                                        {ano}
                                                    </MenuItem>
                                                )
                                            })
                                        }
                                    </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <div className="fon-sz-24 txt-center">
                                <span>Opciones de uso</span>
                            </div>
                        </Grid>
                        <Grid item xs={12}></Grid>
                    </Grid>
                    <OpcionesUso/>
                </div>
            </Paper>
        </Container>
    )
}

export default Informacion