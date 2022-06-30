import React from "react";
import '../hojas-de-estilo/Contador.css'

function Contador({numClics}) {/*Esta funcion solo toma un numero y los muestra dentro de un div*/
    return (
        <div className='contador'>
            {numClics}
        </div>
    );
}

export default Contador;