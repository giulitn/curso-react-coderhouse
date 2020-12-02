import React from 'react';
import '../CartIcon/CartIcon';
import { CartIcon } from '../CartIcon/CartIcon';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <NavLink to="/"> Inicio</NavLink>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="mr-auto">
                    <NavLink to="/zapatos"> Zapatos </NavLink>
                    <NavLink to="/accesorios"> Accesorios </NavLink>
                    <NavLink to="/outlet"> Outlet </NavLink>
                </Nav> */}
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                <CartIcon />
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};



