import React from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/index'
import Formulario from './formulario';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/signin" component={Formulario} exact />
      </Switch>
    </Router>
  );
}

export default App;
