// import {useState} from "react"
import "./MiOrg.css"


const MiOrg =(props)=>{

  //Estado - HOOKS
  //useState
  //const [nombredelavariable,funciondeactualizacion]=useState(valorInicial)
  
  // const [mostrar,actualizarMostrar]=useState(true)
  // const manejarClic =()=>{
  //   actualizarMostrar(!mostrar)
  // }
  
  return <section className="orgSection">
    <h3 className="title">Mi Organización</h3>
    <img src="/img/Botão add-01 1.png" alt="add" onClick={props.cambiarMostrar}/>
  </section>
}

export default MiOrg