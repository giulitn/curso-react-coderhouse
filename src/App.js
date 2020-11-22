import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import { NavBar } from './Components/Navbar/Navbar';
// Containers
import HomeContainer from './Containers/HomeContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContainer from './Containers/CartContainer';


function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path='/' render={() => <HomeContainer />} />
          <Route path='/item/:id' render={() => <ItemDetailContainer />} />
          <Route path='/cart' render={() => <CartContainer />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;