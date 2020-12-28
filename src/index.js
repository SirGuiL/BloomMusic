import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Formulario from './componentes/formulario';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/signin" component={Formulario} />
    </Switch>
  </BrowserRouter>, 
  document.getElementById('root')
);

reportWebVitals();