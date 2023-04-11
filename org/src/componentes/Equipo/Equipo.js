import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador";

const Equipo =(props)=>{

  // destructuracion
  const {colorPrimario,colorSecundario,titulo}=props.datos;
  const {colaboradores}=props
  //
  const colorFondo={backgroundColor: colorSecundario}
  const estiloTitulo={borderColor:colorPrimario}
  
  return <> { colaboradores.length > 0 && <section className="equipo" style={colorFondo}>
    <h3 style={estiloTitulo}>{titulo}</h3>
    <div className="colaboradores">
      
      {
        colaboradores.map((colaborador,index)=><Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario}/>)
      }
    </div>
  </section>}
  </>
}
export default Equipo