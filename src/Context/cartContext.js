import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    const totalCost = () => {
        console.log("calculating total cost")
        const cost = cartProducts.reduce(
          (sum, product) => sum + product.price * product.count,
          0
        )
        return cost
      }

    return (
        <CartContext.Provider value={[cartProducts, setCartProducts, totalCost]}>
            {children}
        </CartContext.Provider>
    )
}