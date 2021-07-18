import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./images/fom-logo.svg";
import {katNav,persNav,routes} from "./list/routing-list";
export default function App() {
  return (
    <Router>
      <div className="nav">
        <img src={logo} className="navlogo"></img>
        <h2>Online Campus</h2>
        <div className="navDiv">
          <h3>Persönliches</h3>
          {persNav.map((navItem, index) => (
            <Link to={navItem.to}>{navItem.name} </Link>
          ))}
        </div>
        <div className="navDiv">
          <h3>Kategorie</h3>
          {katNav.map((navItem, index) => (
            <Link to={navItem.to}>{navItem.name} </Link>
          ))}
        </div>
      </div>
      <div className="mainPage">
        <h1>Main Page</h1>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
