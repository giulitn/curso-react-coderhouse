import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <CartContext.Provider value={[cartProducts, setCartProducts]}>
            {children}
        </CartContext.Provider>
    )
}