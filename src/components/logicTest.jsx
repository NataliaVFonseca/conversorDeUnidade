import React, {useState} from 'react';
import './logicTest.css'

function LogicTest(props) {

  const [valor, setValor] = useState('');

  const handleChange = (event) => {     //mudança de estado da
    setValor(event.target.value);
  }

  function operacao(selectOperacao){

    switch(selectOperacao){  
      case "m-km":
        return((valor/1000 + " km"))
        break;
    
      case "m2-km2":
        return(valor*(Math.pow(10,-6)) + " km^2")
        break;
        
      case "m3-km3":
        return(valor*(Math.pow(10,-6)) + " km^3")
        break;

      case "c-k":
        return(valor+273,15 + " k")
        break;

      case "c-f":
        return((valor*(9/5))+32 + " F")
        break;


      default:

        return("Digite um numero valido")
    }
  }

  return (
    <div className="box-logic">
      <header>
        <form className="forms">
          <input className='caixa'
          type="number"
          value={valor}
          onChange={handleChange}
          />
        </form>
        <p> Valor convertido: </p>
        <p className='resultado'>{operacao(props.selectOperacao)}</p>
      </header>
    </div>
  );
}

export default LogicTest;
