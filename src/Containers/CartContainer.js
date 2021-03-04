import React, { useContext, useState } from 'react';
import Cart from '../Components/Cart/Cart'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../firebase'
import { CartContext } from "../Context/cartContext";

const CartContainer = () => {
    // eslint-disable-next-line no-unused-vars
    const [cartProducts, setCartProducts, totalCost] = useContext(CartContext);
    const [orderId, setOrderId] = useState()

    async function createOrder(buyer) {
        const db = getFirestore()
        const orders = db.collection('orders')
        const newOrder = {
            buyer,
            cartProducts,
            date: firebase.firestore.FieldValue.serverTimestamp(),
            state: "created",
            total: totalCost()
        }
        try {
            const { id } = await orders.add(newOrder)
            setOrderId(id)
        } catch (err) {
            console.log('Error')
        }
    }
    return (
        <div>
            <Cart createOrder={createOrder} orderId={orderId} />
        </div>
    );
};

export default CartContainer;