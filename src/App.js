import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header"
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import {useStateValue} from "./StateProvider"
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from "./Orders";

const promise = loadStripe(
    "pk_test_51KFuMkCh4JQUmmjY4bJbdlaO9Bql5qPUBQMIYHTiu05rczSKZkUTcK2jyNNyqfDudWErmaoQshzg3r7wfLHXJg5n00o1nvlRMV"
)

function App() {
  const [{}, dispatch] = useStateValue()
  //will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>", authUser)

      if (authUser) {
        //the user just logged in the user was logged in
        dispatch({
          type: "SET_USER",
          user:authUser
        })
      } else {
        //the user is LOGGED OUT
        dispatch({
          type: "SET_USER",
          user:null
        })
      }
    })
    
  }, [])
return (
  <Router>
    <div className="app">
      <Switch>
        <Route path = "/orders">
          <Header/>
          <Orders/>
        </Route>
        <Route path = "/login">
          <Login/>
        </Route>

        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>

        <Route path = "/payment">
          <Header />
          <Elements stripe = {promise}>
            <Payment/>
          </Elements>
          
        </Route>

        <Route path="/">
          <Header/>
          <Home />
        </Route>
      </Switch>
    
    </div>
  </Router>
);
}
export default App;