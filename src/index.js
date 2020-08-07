import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import CalculadoraPage from './pages/CalculadoraPage';
import MateriaDetailPage from './pages/MateriaDetailPage';

const Pagina404 = () => (<h1>Página 404</h1>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/materia/:id" component={MateriaDetailPage} />
      <Route path="/calculadora" component={CalculadoraPage} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
