import React from 'react'
import './Home.css'
import ItemListContainer from '../../Containers/ItemListContainer';
import Item from '../Item/Item';

export default function Home() {

    return (
        <div className="container">
            <div className="col-md-12">
                <h1>Productos</h1>
            </div>
            <ItemListContainer product={Item} />
        </div>
    )
}