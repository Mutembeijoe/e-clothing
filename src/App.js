import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <Router>
    <div>
    <Switch>
      <Route path='/' exact component={HomePage}></Route>
      <Route path='/shop' exact component={ShopPage}></Route>
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
