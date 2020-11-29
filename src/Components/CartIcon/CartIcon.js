// import *  as React from 'react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext'



export const CartIcon = () => {

    const [cartProducts] = useContext(CartContext);
    
    return (
            <Link to={'/cart'}>
                <span className ="badge white"> {cartProducts.length} </span>
                <i className="material-icons right hide-on-med-and-down">shopping_cart</i>
            </Link>
    );
};