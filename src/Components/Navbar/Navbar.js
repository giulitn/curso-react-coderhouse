import React from 'react';
import '../CartIcon/CartIcon';
import { CartIcon } from '../CartIcon/CartIcon';
// eslint-disable-next-line
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line
import { Navbar, Nav, Container } from 'react-bootstrap';




export const NavBar = () => {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand href="/">
                    <img
                        src="https://tipilove.com.au/wp-content/uploads/2018/02/img-logo-new.png"
                        width="100"
                        height="80"
                        alt="Logo Equality"
                    />
                </Navbar.Brand>
                <Navbar.Collapse>
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



