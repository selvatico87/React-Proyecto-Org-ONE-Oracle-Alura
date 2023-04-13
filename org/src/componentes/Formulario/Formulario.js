import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/CampoTexto"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario=(props)=>{
  
  const[nombre, actualizarNombre]=useState("");
  const[puesto, actualizarPuesto]=useState("");
  const[foto, actualizarFoto]=useState("");
  const[equipo, actualizarEquipo]=useState("")

  const [titulo, actualizarTitulo]=useState("")
  const [color, actualizarColor] = useState("")

  const {registrarColaborador,crearEquipo}=props
  
  const manejarEnvio =(evento)=>{
    evento.preventDefault();
    let datosAEnviar={
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    }
    registrarColaborador(datosAEnviar);
  }
  
  const manejarNuevoEquipo = (e)=>{
    e.preventDefault()
    crearEquipo({titulo,colorPrimario:color})
  }

  return<section className="formulario">
    <form onSubmit={manejarEnvio}>
      <h2>Rellena el formulario para crear el colaborador.</h2>
      <CampoTexto 
        titulo="Nombre" 
        placeholder="Ingresar Nombre" 
        required 
        valor={nombre} 
        actualizarValor={actualizarNombre}
      /> 
      <CampoTexto 
        titulo="Puesto" 
        placeholder="Ingresar Puesto" 
        required
        valor={puesto} 
        actualizarValor={actualizarPuesto}
      />
      <CampoTexto 
        titulo="Foto" 
        placeholder="Ingresar enlace de Foto" 
        required
        valor={foto} 
        actualizarValor={actualizarFoto}
      />
      <ListaOpciones
        valor={equipo} 
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos}
      />
      <Boton texto="Crear colaborador"/>
    </form>
    <form onSubmit={manejarNuevoEquipo}>
      <h2>Rellena el formulario para crear el equipo.</h2>
      <CampoTexto 
        titulo="Nombre de Equipo" 
        placeholder="Ingresar Nombre del equipo" 
        required 
        valor={titulo} 
        actualizarValor={actualizarTitulo}
      /> 
      <CampoTexto 
        titulo="Color" 
        placeholder="Ingresar color Exadecimal" 
        required
        valor={color} 
        actualizarValor={actualizarColor}
      />
      <Boton texto="Registrar Equipo"/>
    </form>
  </section>
}

export default Formulario