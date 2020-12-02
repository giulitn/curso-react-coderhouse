import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Components/ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap'


export default function ItemDetailContainer() {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [itemQty, setItemQty] = useState(0);
    const handleAddToCartClick = (qtyCounter) => {
        setItemQty(qtyCounter);
    };


    const { id } = useParams();

    useEffect(() => {
        const delay = setTimeout(() => {

            const getProduct = fetch(`https://api.mercadolibre.com/items/${id}?include_attributes=all`)
            getProduct
                .then((res) => {
                    const data = res.json();
                    return data;
                })
                .then((data) => {
                    setProduct(data);
                })
                .catch((error) => {
                    console.log("Hubo un error al querer recuperar el ítem: ", error);
                })
                .finally(() => {
                    setLoading(false);
                })
        }, 3000);
        return () => clearTimeout(delay);
    }, [id])

    if (!loading) {
        return (
            <div className="container">
                <ItemDetail product={product} addtocart={handleAddToCartClick} itemqty={itemQty} />
            </div>
        )
    }
    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Conexión un poco lenta...</span>
            </Spinner>
        );
    }
}
