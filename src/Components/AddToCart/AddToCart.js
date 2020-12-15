import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext'
import { Button } from 'react-bootstrap';

function AddToCart({ qtyCounter, product }) {
    const [cartProducts, setCartProducts] = useContext(CartContext);
    const handleClick = () => {
        let cartItem = {
            id: product.id,
            title: product.title,
            price: product.price,
            count: qtyCounter
        }
        if (cartProducts.find((product) => product.id === cartItem.id)) {
            const newCartProducts = cartProducts.map((product) => {
                if (product.id === cartItem.id) {
                    return { ...product, count: cartItem.count + product.count }
                }
                return product
            })
            console.log ("estoy en el if de add to cart!")

            setCartProducts(newCartProducts)
        } else {
            console.log ("estoy en el else de add to cart!")
            setCartProducts([...cartProducts, cartItem])
        }
    }

    // ----------------------------------------------

    // TO DO
    // Check if there is a product with the same ID
    // Add product qty, not only
    // si en cartProductos ya hay un product.id igual al product.id guardado, sumarlo

    // ----------------------------------------------         


    return (
        <div>
            <Button variant="dark" onClick={handleClick}>Comprar</Button>
        </div>
    );
}

export default AddToCart;