import React from 'react';
import ItemCountContainer from '../../Containers/ItemCountContainer'

function ItemDetail(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className="col s12">
                    <h1>{props.product.title}</h1>
                </div>
                <div className='col s6'>
                    <img className='responsive-img' src={props.product.pictures[0].url} alt="Foto del producto"></img>
                </div>
                <div className='col s6'>
                    <h5>
                        ESPECIFICACIONES:
                        - Confeccionadas en set de Polyester de primera calidad.
                        - corte regular fit: corte normal (no son ajustadas)
                        - Sirven para toda disciplina deportiva. entranamiento funcional, running, crossfit, ciclismo, futbol, basquet, voley y mucho mas.
                        - Utiles tanto para actividades indoor como outdoor.
                    </h5>
                    <div className='container'>
                        <ItemCountContainer min='0' max='10' />
                        <button className="waves-effect btn-large">Comprar</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default ItemDetail;