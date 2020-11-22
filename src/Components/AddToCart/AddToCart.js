import React from 'react';

function AddToCart({qtyCounter} ) {
    return (
        <div>
            <button className="waves-effect btn-large">Comprar {qtyCounter} </button>
        </div>
    );
}

export default AddToCart;