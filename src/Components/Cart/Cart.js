import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext'
import { Button } from 'react-bootstrap'

function Cart() {
    const [cartProducts] = useContext(CartContext);

    return (
        <div>
            <h2>
                Resumen de tu compra:
            </h2>
            <ul>
                {cartProducts.map((product) => (
                    <li>{product}</li>
                ))}
            </ul>
            <Button> Hola mundo! </Button>
        </div>
    );
}

export default Cart;