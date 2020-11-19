import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../Components/ItemDetail/ItemDetail'


export default function ItemDetailContainer() {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);


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
                    console.log(data, 'holaaa!!!');
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
            <div>
                <ItemDetail product={product} />
            </div>
        )
    }
    if (loading) {
        return (
            <div className="progress">
                <div class="indeterminate"></div>
            </div>
        );
    }
}
