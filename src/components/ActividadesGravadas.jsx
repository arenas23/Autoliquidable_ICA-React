import React, { useEffect, useState } from "react";
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
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const ActividadesGravadas = ()=>{


    const[Actividades,setActividades]=useState([])
    const [seleccionada,setSeleccionada] = useState({'Descripcion':'','Codigo':'','TarifaxMil':''})
    const [rows,setRows] = useState([])
    const[gravado,setGravado]=useState([])
   

    const [pagina,setPagina]= useState(0)
    var dato=[]

    useEffect(() => {
        axios
          .get(
            `http://201.184.190.109:1377/apiautoliquidable/api/Autoliquidables/GetActividadesbyMunicipio?codigoMunicipio=800096765`
          )
          .then((res) => {
            setActividades(res.data);
          });
      }, []);


    function createData(actividad, codigo, ingresosGravados,tarifa, impuesto) {
        return {actividad, codigo, ingresosGravados,tarifa, impuesto};
      }

      const agregarFila= ()=>{
        rows.map((row)=>{
            dato.push(row)
        })
         dato.push(createData(seleccionada.Descripcion,seleccionada.Codigo,gravado[0],seleccionada.TarifaxMil,gravado[1]))
        setRows(dato)
      }
    
      const actualizar = (t)=>{
        setRows(t)
      }

      const seleccionarActividad = (e)=>{
        let actividad={}
         Actividades.map((Actividad)=>{
            if(Actividad.Codigo==e)
            {
                actividad={
                    'Descripcion': Actividad.Descripcion,
                    'Codigo': Actividad.Codigo,
                    'TarifaxMil': Actividad.TarifaxMil
                }
            }
            setSeleccionada(actividad)
            setGravado([0,0])
         })
      }

      const calcularImpuesto=(e)=>{
        if(e!="" && e!= NaN){
            let valor = parseInt(e)
            setGravado([valor,valor * parseInt(seleccionada.TarifaxMil)/1000])
        }else{
            setGravado([0,0])
        }


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
                    <InputLabel>Actividades</InputLabel>
                    <Select
                        label="Actividades"
                        onChange={() => {seleccionarActividad(event.target.dataset.value)}}
                        >
                        {Actividades.map((actividad) => {
                            return (
                            <MenuItem value={actividad.Codigo} key={actividad.Id}>
                                {actividad.Descripcion}
                                </MenuItem>)})}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <TextField id="Codigo" label="Codigo" variant="standard" value={seleccionada.Codigo}/>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                <InputLabel>Ingresos Gravados</InputLabel>
                <OutlinedInput
                    id="IngresosGravados"
                    defaultValue={0}
                    onChange={()=>{calcularImpuesto(event.target.value)}}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    label="Ingresos Gravados"/>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                <InputLabel>Tarifa X Mil</InputLabel>
                <OutlinedInput
                    id="IngresosGravados"
                    value={seleccionada.TarifaxMil}
                    //onChange={()=>{setTarifa(event.target.value)}}
                    endAdornment={<InputAdornment position='end'>X 1000</InputAdornment>}
                    label="Tarifa X Mil"/>
                </FormControl>
            </Grid>
            <Grid item xs={2}>
                <FormControl fullWidth>
                <InputLabel>Impuesto</InputLabel>
                <OutlinedInput
                    id="IngresosGravados"
                    value={gravado[1]}
                    //onChange={()=>{setImpuesto(event.target.value)}}
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
                <TablaActividades 
                    filas={rows} 
                    actualizar={(t)=>(actualizar(t))}
                    pagina={pagina}
                    setPagina={(p)=>{setPagina(p)}}
                />
            </Grid>
        </Grid>
       
    </>
    )
}

export default ActividadesGravadas