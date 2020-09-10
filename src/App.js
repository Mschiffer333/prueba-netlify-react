import React from 'react';
import './App.css';


import Contacto from './components/Contacto';
import Preventa from './components/Preventa';
import Home from './components/Home';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">


    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/preventa' component={Preventa} />
        <Route path='/contacto' component={Contacto} />
        </Switch>



        <p>

        </p>



    </div>
    </BrowserRouter>

  );
}

export default App;
