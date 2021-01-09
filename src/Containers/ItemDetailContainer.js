import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Components/ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap'
import { getFirestore } from './../firebase/index'


export default function ItemDetailContainer() {

    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    const [itemQty, setItemQty] = useState(0);

    const handleAddToCartClick = (qtyCounter) => {
        setItemQty(qtyCounter);
    };

    useEffect(() => {
        const db = getFirestore();
        console.log('holaaaaaaa', productId);
        const docRef = db.collection("products").doc(productId);

        docRef.get().then((querySnapshot) => {
            setLoading(false);
            setProduct({ id: querySnapshot.id, ...querySnapshot.data() });
        });
    }, [productId])

    return (
        <>
            {loading ? <Spinner animation="border" role="status" />
                : <ItemDetail product={product} addtocart={handleAddToCartClick} itemqty={itemQty} />
            }
        </>
    )
}