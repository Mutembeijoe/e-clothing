import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/SignInAndSignUp/sign-in.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component{

  state = {
    currentUser:null
  }

  unsuscribeFromAuth = null

  componentDidMount(){
    this.unsuscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state)
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsuscribeFromAuth()
  }

  render(){
    return (
      <Router>
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/shop' exact component={ShopPage}></Route>
        <Route path='/signin' exact component={SignInAndSignUpPage}></Route>
      </Switch>
      </div>
      </Router>
      
    );
  }
}

export default App;
