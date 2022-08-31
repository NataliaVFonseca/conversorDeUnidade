import React, {useState} from 'react';
import LogicTest from './logicTest';
import './unidadeConv.css'

function ListaUnidades() {

    const [lista, setLista] = useState('');

    const handleChange = (event) => {
        setLista(event.target.value);
    }

  return (
    <div>
      <header>
        <select className='lista'
            onChange={handleChange}>

            <option value="-">Unidades de conversão</option>
            <option value="m-km">Metro (m) p/ quilometro (km)</option>
            <option value="m2-km2">Metro quadrado (m^2) p/ quilometro quadrado (km^2)</option>
            <option value="m3-km3">Metro cúbico (m^3) p/ quilometro cúbico (km^3)</option>
            <option value="c-k"> Graus Celsius (c) p/ grau Kelvin (k)</option>
            <option value="c-f"> Graus Celsius (c) p/ grau fahrenheit (F)</option>
            
        </select>
        <p>Digite o numero a ser convertido</p>
        <LogicTest selectOperacao={lista}/>
      </header>  
    </div>
  );
}

export default ListaUnidades;