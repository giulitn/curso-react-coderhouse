// import *  as React from 'react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext'
import { CgShoppingCart } from 'react-icons/cg'
// import { Badge } from 'react-bootstrap'



export const CartIcon = () => {

    const [cartProducts] = useContext(CartContext);

    return (
        <div classname="container">
            <Link to={'/cart'}>
                {/* <CgShoppingCart>
                <Badge variant="light"> {cartProducts.length} </Badge>
                </CgShoppingCart> */}
                <CgShoppingCart />
                <span className="badge white"> {cartProducts.length} </span>
            </Link>
        </div>
    );
};

