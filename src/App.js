import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getFirestore } from './firebase/index';


// Components
import { NavBar } from './Components/Navbar/Navbar';
import { CartProvider } from './Context/cartContext';
// Containers
import HomeContainer from './Containers/HomeContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import CartContainer from './Containers/CartContainer';


function App() {

//   const [loading, setLoading] = useState(false);
//   const [items, setItems] = useState([

//   ])

  return (
    <BrowserRouter>
      <div>
        <CartProvider>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route exact path='/' render={() => <HomeContainer />} />
            <Route path='/item/:id' render={() => <ItemDetailContainer />} />
            <Route path='/cart' render={() => <CartContainer />} />
          </Switch>
        </CartProvider>
      </div>
    </BrowserRouter>
  )
  }

export default App;