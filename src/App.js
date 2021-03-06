import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/signIn-signUp/signIn-signUp.component';

import {auth} from './firebase/firebase.utils'


class App extends React.Component {
  constructor(){
    super();

    this.state= {
      currentUser: null
    }
  }

  unsubscriveFromAuth = null;

  componentDidMount(){
    this.unsubscriveFromAuth=auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount(){
    this.unsubscriveFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/shop'} component={ShopPage} />
          <Route path={'/signin'} component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
