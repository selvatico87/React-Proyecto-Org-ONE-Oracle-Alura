import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador";
import hexToRgba from 'hex-to-rgba';

const Equipo =(props)=>{

  // destructuracion
  const {colorPrimario,colorSecundario,titulo}=props.datos;
  const {colaboradores, eliminarColaborador,actualizarColorEquipo}=props
  //
  const colorFondo={backgroundColor: hexToRgba(colorPrimario,0.6)}
  const estiloTitulo={borderColor:colorPrimario}
  

  return <> { colaboradores.length > 0 && <section className="equipo" style={colorFondo}>
    <input
        type="color"
        className="input-color"
        value={hexToRgba(colorPrimario,0.6)}
        onChange={(e)=>{
          actualizarColorEquipo(e.target.value, titulo)
        }}
    />
    <h3 style={estiloTitulo}>{titulo}</h3>
    <div className="colaboradores">
      
      {
        colaboradores.map((colaborador,index)=><Colaborador 
        datos={colaborador} 
        key={index} 
        colorPrimario={colorPrimario}
        eliminarColaborador={eliminarColaborador}
        />)
      }
    </div>
  </section>}
  </>
}
export default Equipo