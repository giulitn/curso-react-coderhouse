import React from 'react';
import ItemCountContainer from '../../Containers/ItemCountContainer'
import AddToCart from '../AddToCart/AddToCart';

function ItemDetail(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <h3>{props.product.title}</h3>
                </div>
                <div className="col-sm">
                    <img src={props.product.pictures[0].url} alt="Foto del producto"></img>
                </div>
                <div className="col-sm">
                    <ItemCountContainer min='0' max='10' handleClick={props.addtocart} />
                    <AddToCart qtyCounter={props.itemqty} product={props.product} />
                </div>
                <div>
                    <h5>
                        ESPECIFICACIONES:
                        - Confeccionadas en set de Polyester de primera calidad.
                        - corte regular fit: corte normal (no son ajustadas)
                        - Sirven para toda disciplina deportiva. entranamiento funcional, running, crossfit, ciclismo, futbol, basquet, voley y mucho mas.
                        - Utiles tanto para actividades indoor como outdoor.
                </h5>
                </div>
            </div>
        </div>
    );
}
export default ItemDetail;