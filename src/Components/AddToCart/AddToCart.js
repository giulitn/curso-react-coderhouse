import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext'

function AddToCart({ qtyCounter, productTitle }) {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const handleClick = () => {
        setCartProducts([...cartProducts, productTitle])
    }

    return (
        <div>
            <button onClick={handleClick} className="waves-effect btn-large">Comprar</button>
        </div>
    );
}

export default AddToCart;