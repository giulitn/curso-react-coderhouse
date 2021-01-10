import React from 'react';
import { Container } from 'react-bootstrap';
import ItemCountContainer from '../../Containers/ItemCountContainer'
import AddToCart from '../AddToCart/AddToCart';
import './ItemDetail.css';



const ItemDetail = ({ product, itemqty, addtocart }) => {

    return (
        <Container>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt="Foto del producto" id="item-img"></img> 
                    <ItemCountContainer min={1} max={30} handleClick={addtocart} />
                    <p>{product.description}</p>
                    <p>Precio: $ {Intl.NumberFormat().format(product.price)}</p>
                
                <AddToCart qtyCounter={itemqty} product={product} />
        </Container>
    );
}

export default ItemDetail;