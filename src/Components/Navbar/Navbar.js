import React from 'react';
import '../CartIcon/CartIcon';
import { CartIcon } from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap';
import CategoriesMenu from "./CategoriesMenu";


export const NavBar = () => {
    return (
        <Container>
            <Navbar>
                <Navbar.Brand>
                <Link to={`/`}>
                    <img
                        src="https://tipilove.com.au/wp-content/uploads/2018/02/img-logo-new.png"
                        width="100"
                        height="80"
                        alt="Logo Equality"
                    />
                </Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <CategoriesMenu />
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <CartIcon />
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};



