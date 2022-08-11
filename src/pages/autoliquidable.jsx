import React, {useState} from 'react'

import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Contenido from "../containers/Contenido"
import Button from "@mui/material/Button"
import Fab from '@mui/material/Fab';

import '../styles/informacion.scss'

const Pagina = () =>{

    const [pasos,setPasos] = useState(3)


    return(
        <Container maxWidth="xl">
            <Paper elevation={6} square>
                <div className="pepe">
                    <Contenido paso={pasos}/>
                </div>
            </Paper>
            <div className="siguiente">
                <Fab color="primary" aria-label="add" onClick={()=>{
                    setPasos(pasos+1)}}
                >
     
                </Fab>
            </div>
            <div className="atras">
                <Fab color="primary" aria-label="add" onClick={()=>{
                    setPasos(pasos-1)}}
                >
     
                </Fab>
            </div>
            
        </Container>
       
    )
}

export default Pagina