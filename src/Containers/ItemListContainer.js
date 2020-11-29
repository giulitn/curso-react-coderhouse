import React, { useState, useEffect } from 'react';
import Item from '../Components/Item/Item'


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = fetch('https://api.mercadolibre.com/sites/MLA/search?q=remera&limit=12') // esto es ASYNC, por eso después va un "then"
        getProducts
            .then((res) => {
                const data = res.json();
                return data;
            })
            .then((data) => {
                setProducts(data.results);
            }
            )
    }, []
    );

    return (
        <div>
            {products.map((product) => (
                <Item key={product.id} title={product.title} id={product.id} price={product.price} img={product.picture} />
            )
            )}
        </div>
    );
}

export default ItemListContainer;