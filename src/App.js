import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Components
import { NavBar } from './Components/Navbar/Navbar';
// Containers
import HomeContainer from './Containers/HomeContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';


// Styles 
import M from 'materialize-css';

function App() {

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path='/' render={() => <HomeContainer />} />
          <Route path='/item/:id' render={() => <ItemDetailContainer />} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;