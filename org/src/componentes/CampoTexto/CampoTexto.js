// import { useState } from "react";
import "./CampoTexto.css"

const CampoTexto=(props)=>{
  // const[valor,setValor]=useState("")
  const placeHolderModificado = `${props.placeholder}...`;
 
  const manejarCambio=(e)=>{
    props.actualizarValor(e.target.value)
  }

  return <div className="campoTexto">
    <lavel>{props.titulo}</lavel>
    <input 
      placeholder={placeHolderModificado}
      required={props.required}
      value={props.valor}
      onChange={manejarCambio}  
    />
  </div>
}
 export default CampoTexto