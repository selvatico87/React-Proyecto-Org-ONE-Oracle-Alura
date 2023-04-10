import "./ListaOpciones.css"

const ListaOpciones=(props)=>{
  const equipos =[
    "Programación",
    "Front End",
    "data Science",
    "Devops",
    "UX",
    "Móvil",
    "Innovación y Gestión"
  ]

  const manejarCambio=(e)=>{
    props.actualizarEquipo(e.target.value)
  }
  return <div className="listaOpciones">
    <label>Equipos</label>
    <select value={props.valor} onChange={manejarCambio}>
      <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
      {equipos.map((equipo, index)=><option key={index} >{equipo}</option>)}
    </select>
  </div>
}

export default ListaOpciones