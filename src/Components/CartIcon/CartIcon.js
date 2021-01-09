import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext'
import { CgShoppingCart } from 'react-icons/cg'

export const CartIcon = () => {
    const [cartProducts] = useContext(CartContext);
    const cartSize = () => {
        return cartProducts.reduce((sum, product) => sum + product.count, 0);
    }

    return (
        <div classname="container">
            <Link to={'/cart'}>
                <CgShoppingCart />
                <span className="badge white"> {cartSize()} </span>
            </Link>
        </div>
    );
};
