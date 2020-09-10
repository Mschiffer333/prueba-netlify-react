import React from 'react';
import logo1 from './anakin.jpg';
import logo2 from './anakin1.jpg';
import logo3 from './anakin2.jpg';
import logo4 from './mandalorian.jpg';
import logo5 from './mandalorian1.jpg';
import Carousel from 'react-bootstrap/Carousel';
import './Acomodar.css';

function Carrusel(){
  return(
    <div className = 'Carrusel'>


    <Carousel>
  <Carousel.Item>

    <img
      height={450}
      className="d-block w-100"
      src={logo1}
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>Anakin Sith Hot Toys</h3>
      <p>Pieza única en oferta</p>
    </Carousel.Caption>

  </Carousel.Item>

  <Carousel.Item>
    <img
      height={450}
      className="d-block w-100"
      src={logo2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Anakin Sith Hot Toys</h3>
      <p>Pieza única Hot Toys</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      height={450}
      className="d-block w-100"
      src={logo3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Anakin Sith Hot Toys</h3>
      <p>Pieza única Hot Toys</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
  )
}

export default Carrusel;
