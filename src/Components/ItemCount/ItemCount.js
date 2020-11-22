import * as React from 'react';
import './itemCount.css'

export default function itemCount({ counter, onAdd, onClick }) {
    return (
        <div className='count container s12 m4 l8'>
            <button className="btn-floating grey" onClick={() => onAdd('remove')}>
                <i className="material-icons">remove</i>
            </button>
            <div className='number'>
                {counter}
            </div>
            <button className="btn-floating grey" onClick={() => onAdd('add')}>
                <i className="material-icons">add</i>
            </button>
        </div>
    )
}


// Si usamos export default, no es necesario importarlo como { componente } en App.js