import React from 'react';
import ItemCountContainer from '../../Containers/ItemCountContainer'
import AddToCart from '../AddToCart/AddToCart';



const ItemDetail = ({ product, itemqty, addtocart }) => {


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h3>{product.title}</h3>
                </div>
                <div className="col-sm">
                    <img src={product.image} alt="Foto del producto"></img>
                </div>
                <div className="col-sm">
                    <h3>{product.description}</h3>
                </div>
                <div className="col-sm">
                    <ItemCountContainer min={1} max={30} handleClick={addtocart} />
                </div>
                <div>
                    <p>Precio: $ {Intl.NumberFormat().format(product.price)}</p>
                </div>
                <AddToCart qtyCounter={itemqty} product={product} />
            </div>
        </div>
    );
}

export default ItemDetail;