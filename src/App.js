import React from 'react';
import {Switch , Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop/shop.component.jsx';
import SignInAndSignUpPages from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import Header from './components/header/header.component.jsx';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null
/*open auth sys*/
  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
       <div>
       <Header currentUser={this.state.currentUser} />
         <Switch>
           <Route exact path='/' component={HomePage}/>
           <Route path='/shop' component={ShopPage}/>
           <Route path='/signIn' component={SignInAndSignUpPages}/>
         </Switch>
   
       </div>
      
     );
   }
 }

export default App;
