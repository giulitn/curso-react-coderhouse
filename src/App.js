import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import { NavBar } from './Components/Navbar/Navbar';
import { CartContext, CartProvider } from './Context/cartContext';
import HomeContainer from './Containers/HomeContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContainer from './Containers/CartContainer';
import itemCount from './Components/ItemCount/ItemCount';
import Cart from './Components/Cart/Cart';


function App() {

  /*const [cartItem, setCartItem] = useState([])

  const productsAdd = (itemCount) => {
    if (cartItem.find((product) => product.id === itemCount.id)) {
      const newCartItem = cartItem.map((product) => {
        if (product.id === itemCount.id) {
          return { ...product, count: itemCount.count + product.count }
        }
        return product
      })
      setCartItem(newCartItem)
    } else {
      setCartItem((state) => {
        return [...state, itemCount]
      })
    }
  }

  const totalCost = () => {
    const cost = cartItem.reduce(
      (acumulador, product) => acumulador + product.price * product.count,
      0
    )
    // return convertToMoney(cost) TO DO
    return cost
  }

  const totalQty = () => {
    return cartItem.reduce((acumulador, product) => acumulador + product.count, 0)
  }

  const resetCartSize = () =>
    setCartItem([])
*/

  return (

    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() => <HomeContainer />} />
          <Route path='categories/:categoryId' render={() => <HomeContainer />} />
          <Route path='/item/:productId' render={() => <ItemDetailContainer />} />
          <Route exact path='/cart' render={() => <CartContainer />} />
        </Switch>
      </BrowserRouter>
    </CartProvider>

    
  )
}
export default App;