import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
