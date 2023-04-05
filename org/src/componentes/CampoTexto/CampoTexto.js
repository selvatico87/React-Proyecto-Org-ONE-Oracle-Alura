import "./CampoTexto.css"

const CampoTexto=(props)=>{
  const placeHolderModificado = `${props.placeholder}...`;
  return <div className="campoTexto">
    <lavel>{props.titulo}</lavel>
    <input placeholder={placeHolderModificado}></input>
  </div>
}
 export default CampoTexto