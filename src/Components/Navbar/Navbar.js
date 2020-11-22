// @flow 
import * as React from 'react';
import '../CartIcon/CartIcon';
import { CartIcon } from '../CartIcon/CartIcon';

export const NavBar = ({ click, children }) => {
    return (
        <div>
            <nav>
                <div className="container">

                    <div className="row">
                        <a href="/" className="brand-logo"> 
                            <i className="material-icons align-left">favorite_border</i>
                        </a>
                        <div>
                            <CartIcon />
                        </div>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Zapatos</a></li>
                            <li><a href="badges.html">Carteras</a></li>
                            <li><a href="collapsible.html">Outlet</a></li>
                            <li><a href="collapsible.html">Cómo comprar</a></li>
                            <li><a href="collapsible.html">Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
};

