import React from 'react';


import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

function Navigation (){
  return(
    <div className = 'Navigation'>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Star Wars Black Series</Navbar.Brand>
        <Nav className="mr-auto">

          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/preventa">Pre-Venta</Nav.Link>
          <Nav.Link href="/contacto">Contacto</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Búsqueda" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default Navigation;
