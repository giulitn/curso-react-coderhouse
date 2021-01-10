import React from 'react';
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from 'react-router-dom'
import './Navbar.css'


function CategoriesMenu() {

    return (
        <DropdownButton id="dropdown-basic-button" title="Ver por categorías">
            <Dropdown.Item>
                <Link to={`/categories/accesorios`}>Accesorios</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={`/categories/indumentaria`}>Indumentaria</Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to={`/categories/deco`}>Deco</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
                <Link to={`/`}>Ver todos los productos</Link>
            </Dropdown.Item>
        </DropdownButton>
    );
}

export default CategoriesMenu;


