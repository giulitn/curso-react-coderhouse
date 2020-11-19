import React from 'react'
import './Home.css'
// eslint-disable-next-line 
import ItemCountContainer from '../../Containers/ItemCountContainer'
import ItemListContainer from '../../Containers/ItemListContainer'
import Item from '../Item/Item'

export default function Home() {

    return (
        <div className="App">
            <header className="App-header">
                { /* <p>{greeting} {name}</p> */}
                {/*<ItemCountContainer min='0' max='10'/>*/}
                <h1 className="nav-header center">Productos</h1>
                <div className="row">
                    <ItemListContainer
                        product={Item}
                    />
                </div>

            </header>
        </div>
    )
}