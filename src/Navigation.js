import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Discover from "./pages/Discover";
import Home from "./pages/Home";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/discover" component={Discover} />
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />
        </Switch>

        <div
          className="fixed bottom-4 navbar bg-white text-gray-400 flex justify-evenly p-4 shadow-xl rounded-full"
          style={{ width: "300px" }}
        >
          <div>
            <NavLink
              to="/"
              activeStyle={{
                color: "blue",
              }}
            >
              <h1 className="material-icons">home</h1>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/discover"
              activeStyle={{
                color: "blue",
              }}
            >
              <h1 className="material-icons">place</h1>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/cart"
              activeStyle={{
                color: "blue",
              }}
            >
              <h1 className="material-icons">shopping_cart</h1>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/account"
              activeStyle={{
                color: "blue",
              }}
            >
              <h1 className="material-icons">account_circle</h1>
            </NavLink>
          </div>
        </div>
      </div>
    </Router>
  );
}
