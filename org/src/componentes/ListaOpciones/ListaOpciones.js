import "./ListaOpciones.css"

const ListaOpciones=()=>{
  const equipos =[
    "Programación",
    "Front End",
    "data Science",
    "Devops",
    "UX",
    "Móvil",
    "Innovación y Gestión"
  ]

  return <div className="listaOpciones">
    <label>Equipos</label>
    <select>
      {equipos.map((equipo, index)=><option key={index}>{equipo}</option>)}
    </select>
  </div>
}

export default ListaOpciones