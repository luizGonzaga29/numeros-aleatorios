import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter,Switch,Route} from "react-router-dom";
import App from './App';
import Sorteio from './TelaSorteio';



ReactDOM.render(
  <BrowserRouter>
      <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/TelaSorteio/:numero1/:numero2/:repeticao" component={Sorteio}/>
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  
);






