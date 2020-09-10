import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import logo1 from './revan.jpg';

import Boton from './Button';
import Media1 from './Media';
import Navigation from './Navigation';
import Imagen from './Image';
import Paginas from './Pagination';
import Carrusel from './Carrusel';


function Home() {
  return (
    <div className="Home">
    <Imagen/>
    <Navigation />
    <br>
    </br>
    <Carrusel />

        <img src = {logo1} className="App-logo1" alt="logo1"/>
        <img src = "https://http2.mlstatic.com/sith-trooper-black-series-star-wars-carbonized-graphite-D_NQ_NP_817017-MLM32652983919_102019-F.jpg" className="App-logo2" alt="logo2"/>
<Boton />
<Media1 />
<Paginas />

        <p>

        </p>

    </div>

  );
}

export default Home;
