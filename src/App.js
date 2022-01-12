import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  const [curUser, setCurUser] = useState(null);

  useEffect(() => {
    const unsubFromAuth = auth.onAuthStateChanged((user) => {
      setCurUser(user);
    });

    return () => {
      unsubFromAuth();
    };
  }, []);

  return (
    <div>
      <Header curUser={curUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
