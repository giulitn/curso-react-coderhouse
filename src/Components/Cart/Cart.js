import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext'
import { Button, Container, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartForm from './CartForm';
import './cart.css'

function Cart({ createOrder, orderId }) {
    // eslint-disable-next-line no-unused-vars
    const [cartProducts, setCartProducts, totalCost] = useContext(CartContext);

    if (orderId) {
        return (
            <Alert variant="success">
                <Alert.Heading>¡Gracias por tu compra! </Alert.Heading>
                <p>
                    El código de tu compra es: {orderId}
                </p>
                <hr />
                <p className="mb-0">
                    Ya te estamos enviando un e-mail con la información de tu orden
                </p>
            </Alert>
        )
    }

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
                                    <li>{product.title} <br />
                                        <span className="qty">{"cantidad:"}</span> {product.count}</li>
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
            <br></br>
            <CartForm createOrder={createOrder} />
        </div>
    );
}

export default Cart;