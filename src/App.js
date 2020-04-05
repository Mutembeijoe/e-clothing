import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/sign-in.component';

function App() {
  return (
    <Router>
    <div>
    <Header/>
    <Switch>
      <Route path='/' exact component={HomePage}></Route>
      <Route path='/shop' exact component={ShopPage}></Route>
      <Route path='/signin' exact component={SignInAndSignUpPage}></Route>
    </Switch>
    </div>
    </Router>
    
  );
}

export default App;
