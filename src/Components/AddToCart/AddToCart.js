import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext'
import { Button } from 'react-bootstrap';

function AddToCart({ qtyCounter, productTitle }) {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const handleClick = () => {
        setCartProducts([...cartProducts, productTitle])
    }

    return (
        <div>
            <Button variant="dark" onClick={handleClick}>Comprar</Button>
        </div>
    );
}

export default AddToCart;