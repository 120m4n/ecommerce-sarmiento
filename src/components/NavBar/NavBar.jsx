import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";



function NavBar(props) {
    return (
        <>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                            alt="logotipo empresa"
                            src={props.logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                            CatStore
                        </Navbar.Brand>
                    </Link>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/categoria/arena">Arena</Nav.Link>
                        <Nav.Link as={Link} to="/categoria/comida">Comida</Nav.Link>
                        <Nav.Link as={Link} to="/categoria/juguetes">Juguetes</Nav.Link>
                    </Nav>
                    <Link to="/cart">
                        <CartWidget count={4} />
                    </Link>
                </Container>
            </Navbar>   
        </>
    )
}

export default NavBar





