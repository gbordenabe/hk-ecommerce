import Products from './components/Products'
import Navbar from './components/Navbar'
import CheckoutPage from './components/CheckoutPage'
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Singin from './components/Singin'
import Singup from './components/Singup'
import { useEffect } from 'react';
import { auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";
import Checkout from './components/CheckuotForm/Checkout';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser) =>{
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  },[])

  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Switch>
        <Route path="/checkout">
            <Checkout/>
          </Route>
        <Route path="/singup">
            <Singup/>
          </Route>
        <Route path="/singin">
            <Singin/>
          </Route>
        <Route path="/checkout-page">
            <CheckoutPage/>
          </Route>
          <Route path="/">
            <Products/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
