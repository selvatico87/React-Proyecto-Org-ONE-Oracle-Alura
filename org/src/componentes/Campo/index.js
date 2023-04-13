// import { useState } from "react";
import "./Campo.css"

const Campo=(props)=>{
  // const[valor,setValor]=useState("")
  const placeHolderModificado = `${props.placeholder}...`;
 
  const{ type = "text" }=props

  const manejarCambio=(e)=>{
    props.actualizarValor(e.target.value)
  }

  return <div className={`campo campo-${type}`}>
    <lavel>{props.titulo}</lavel>
    <input 
      placeholder={placeHolderModificado}
      required={props.required}
      value={props.valor}
      onChange={manejarCambio}  
      type={type}
    />
  </div>
}
 export default Campo