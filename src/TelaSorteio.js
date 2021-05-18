import React, {useState} from 'react';
import {Link, useParams} from "react-router-dom";
import "./App.css";
import { Button } from 'semantic-ui-react';


const GetNumeroAleatorio = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const OrganizarNumeros = (min, max) =>{
  var aux = 0;
  var vetor = [];
  if(min > max){
    aux = min;
    min = max;
    max = aux;
  }
  vetor = [min, max]
  return(
    vetor
  );
};
let vetorOrganizado = [];
let vetorAleatorio = [];
let numero;
var desabilitarBotao = false;


function Sorteio() {
  let {numero1,numero2,repeticao}= useParams(); 
  const [num, setNum] = useState([]);
  const itens = Array.from(num);
  vetorOrganizado = OrganizarNumeros(numero1, numero2);
  
  function exibirResultado(){
    if(numero === undefined ){
      numero = GetNumeroAleatorio(vetorOrganizado[0], vetorOrganizado[1]);
      vetorAleatorio.push(numero);
      
    }else{

      if(repeticao === "true"){
        var qtdVetor = vetorOrganizado[1] - vetorOrganizado[0] + 1;
       
        if(qtdVetor === vetorAleatorio.length){
          desabilitarBotao = true;
          itens.pop();
          alert("Não ha mais números a serem gerados");
        }else{
          while(vetorAleatorio.includes(numero)){
            numero = GetNumeroAleatorio(vetorOrganizado[0], vetorOrganizado[1]);
          }
          vetorAleatorio.push(numero);
        }
      }else{
        numero = GetNumeroAleatorio(vetorOrganizado[0], vetorOrganizado[1]);
        vetorAleatorio.push(numero);
      }
    }
    itens.push({id:num.length, value: numero});
    
    setNum(itens);
  }

  function zerarValores(){
    numero = undefined;
    vetorAleatorio = [];
    setNum([]);
    desabilitarBotao = false;
  }
 
  const ListItem = (props) => {
    return (
      <div>
        
      <h3>{props.value}</h3>
      </div>
    );
  };

  function SetarValor(){
    console.log(num);
    console.log(vetorAleatorio);
   
    return(
      <div>
        <h1>{numero}</h1>
      {num.map(({id, value}) => (
        
        numero === value && repeticao === "true" ? null:
        <ListItem
        key={id}
        value={value}
        
        
        
      />
      ))}
      </div>
       
    );
  }
    return (
      <div id="divTelaSorteio">
          <button id="btnGerar" disabled={desabilitarBotao} onClick={exibirResultado} >Gerar número</button>
          <label id="labelVoltar">Clique aqui para voltar a tela de configuração =&gt;</label>
          <Link to="/">
            <Button onClick={zerarValores} id="btnVoltar">Voltar</Button>
          </Link>
          <br />
          <SetarValor />
      </div>
    );
  };
   
  export default Sorteio;