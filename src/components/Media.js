import React from 'react';
import logo1 from './revan.jpg';
import logo2 from './grievous.jpg';
import {Media, Button} from 'react-bootstrap';
import './Acomodar.css';


function Media1 (){

  return(
    <div className = 'Acomodar'>
    <div class = 'Jumbotron'>
<Media>
  <img
    width={150}
    height={150}
    className="align-self-center mr-3"
    src={logo1}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h4>Caballero Jedi Revan</h4>
    <p>
      Ataviado con una túnica blanca y empuñando un sable
      de luz morado, el caballero Jedi redimido Revan completa
      su transición de Sith a Jedi en Star Wars: Galaxy of Heroes.
    </p>
    <Button variant="primary">Comprar</Button>{' '}
  </Media.Body>
</Media>
</div>

<br>
</br>
<div class = 'Jumbotron'>
<Media>
  <img
    width={150}
    height={150}
    className="mr-3"
    src={logo2}
    alt="Generic placeholder"
  />
  <Media.Body>
    <h4>General Grievous</h4>
    <p>
      El general Grievous fue un brillante estratega militar separatista,
      además de un temible cazador de caballeros Jedi, conocido por su crueldad y su tos seca.
      Su cuerpo entero era un arma con el que realizaba ataques ultraveloces y asestaba golpes
      devastadores. También era rápido para huir de las peleas, una táctica que le funcionó
      bien hasta su duelo final contra Obi-Wan Kenobi.
    </p>
  </Media.Body>
</Media>
</div>
</div>
)
}

export default Media1;
