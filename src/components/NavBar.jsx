import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

import React from 'react'

function NavBar(props) {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={props.logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Ecommerce
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Producto A1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Producto A2</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Producto A3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Producto B1</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Producto B2</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>   
        </>
    )
}

export default NavBar





