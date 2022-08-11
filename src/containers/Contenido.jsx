import React, {useState} from 'react'
import Informacion from "../components/informacion"
import Contribuyente from '../components/Contribuyente'
import BaseGravable from '../components/BaseGravable'
import ActividadesGravadas from '../components/ActividadesGravadas'


const Contenido = (props)=>{

    if(0 == props.paso){
        return (
            <Informacion/>
        )
    }else if(1 == props.paso){
        return (
           <Contribuyente/>
        )
    }else if(2 == props.paso){
       return(<BaseGravable/>)
    }else if(3 == props.paso){
        return(<ActividadesGravadas/>)
    }
   

}

export default Contenido