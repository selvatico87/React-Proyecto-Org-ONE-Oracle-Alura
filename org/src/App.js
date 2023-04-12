import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer';

function App() {
  
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores,actualizarColaboradores]=useState([{
    equipo:"Front End",
    foto: "https://avatars.githubusercontent.com/u/101286521?s=400&v=4",
    nombre: "Ignacio González",
    puesto: "Desarrollador"
  }])

  const [equipos, actualizarEquipos]=useState([
    {titulo:"Programación",
     colorPrimario: "#57C278",
     colorSecundario: "#D9F7E9", 
    },
    {titulo:"Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
    },
    {titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
    },
    {titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
    },
    {titulo:"UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
    },
    {titulo:"Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
    },
    {titulo:"Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
    },
  ])

  //ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra // es otra opcion

  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador =(colaborador)=>{
    actualizarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador=(colaborador)=>{

  }
  const actualizarColorEquipos=(color,titulo)=>{
    console.log("Actualizar: ",color,titulo)
    const equiposActualizados= equipos.map((equipo)=>{
      if(equipo.titulo === titulo){
        equipo.colorPrimario = color
      } 
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  return (
    <div>
      <Header></Header>
      {mostrarFormulario===true?<Formulario equipos={equipos.map((equipo)=>equipo.titulo)} registrarColaborador={registrarColaborador} />:<></>}
      {/* <Header/>
      {Header()} */}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo)=><Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColorEquipos={actualizarColorEquipos}
          />)
      }
      <Footer/>
    </div>
  );
}

export default App;
