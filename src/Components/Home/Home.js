import React from 'react'
import './Home.css'
import ItemListContainer from '../../Containers/ItemListContainer';
import Item from '../Item/Item';
import Slider from '../Slider/Slider';

export default function Home() {

    return (
        <div className="container">
            <Slider/>
            <div className="title">
                <h1>productos</h1>
            </div>
            <ItemListContainer product={Item} />
        </div>
    )
}