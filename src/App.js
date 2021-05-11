import {Link, useHistory} from "react-router-dom";
import React ,{useState} from 'react';
import "./App.css";
import { Button } from 'semantic-ui-react';


function App() {
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [checked, setChecked] = useState(false);
  const history = useHistory();
  
  function Checkbox() {
      
    return (
      <label>
        <input id="check" type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
          
        />
        ---Marque ao lado para não gerar números repetidos
      </label>
    );
  }

    const handleRequest = (num1, num2, checked) => {
      history.push({
        pathname: '/TelaSorteio/',
        state: { numero1: num1, numero2: num2, boleano: checked},
        
      });
    };

  const Alerta = () =>{
    alert("Algo errado nos campos!Os campos devem ser preenchidos com números.");
  }

  function SetarBotao(){
    var botao;
    if(!isNaN(num1) && !isNaN(num2) && num1 !== "" && num2 !== ""){
      botao = <Link to={`/TelaSorteio/${num1}/${num2}/${checked}`}>
                <Button onClick={() => handleRequest(num1,num2,checked)} className="btnClass" >Confirmar</Button>
              </Link>
              
    }else{
      botao = <button onClick={Alerta}  className="btnClass">Confirmar</button>;
    }
    return(
      botao
    );
    
  }

  return (
    <div id="divTelaConfig">
      <h1>Gerador de Números</h1>
      <hr/>
      <label>Número um:</label>
      <input value={num1} onChange={(evt1) => setNum1(evt1.target.value)} id="inputNum1" type="number" placeholder="Número mínimo"></input>
      <br></br>
      <br></br>
      <label>Número dois:</label>
      <input value={num2} onChange={(evt2) => setNum2(evt2.target.value)} type="number" placeholder="Número máximo"></input>
      <br></br>
      <br></br>
      <SetarBotao />
      <br></br>
      <Checkbox />
    </div>
  );
};
export default App;
