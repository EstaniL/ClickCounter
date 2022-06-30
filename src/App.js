import './App.css';
import Boton from './componentes/Boton'; /*Hay que importar el componente*/
/*import Logo from './imagenes/avion.png'; /*Logo es el nombre que yo le doy, no me daba porque ponia png*/
/*import Logo from  './imagenes/avion.jpg';*/
import Contador from './componentes/Contador';
import {useState} from 'react';


function App() { /*La funcion app va a renderizar el componente Boton que cree*/
  
  const [numClics,setNumClics]= useState(0);/* 0 es el valor inicial de numClics*/

  const manejarClic = () =>{
    setNumClics(numClics +1);
    /*Cada vez que se haga clic se le pasa a setNumClics el numClics actualizado*/
  }
  const reiniciarContador = () =>{
    setNumClics(numClics -numClics)
  }
  return (
    <div className="App">
      <div className='contenedor-ppal'>
        <Contador
          numClics={numClics}
        />
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
        texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
