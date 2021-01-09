import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartForm from './CartForm';
import './cart.css'

function Cart() {
    // eslint-disable-next-line no-unused-vars
    const [cartProducts, setCartProducts, totalCost] = useContext(CartContext);

    return (
        <div>
            <Container>
                {
                    cartProducts.length ?
                        <div>
                            <h2>
                                Resumen de tu compra:
                            </h2>
                            <ul>
                                {cartProducts.map((product) => (
                                    <p>{product.title} <br />
                                        <span className="qty">{"cantidad:"}</span> {product.count}</p>
                                ))}
                            </ul>
                            <h5>Total de la compra: ${totalCost()}</h5>
                        </div>
                        :
                        <h2>Tu carrito está vacío</h2>
                }
                <Button variant="info">
                    <Link to={`/`} className="buy-link">
                        Seguir comprando
                    </Link>
                </Button>
            </Container>
            <CartForm/>
        </div>
    );
}

export default Cart;