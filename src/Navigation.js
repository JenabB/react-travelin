import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

//main page
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Discover from "./pages/Discover";
import Flights from "./pages/Flights";
import Home from "./pages/Home";
import Notification from "./pages/Notification";

//page

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          {/* main page */}
          <Route exact path="/" component={Home} />
          <Route path="/discover" component={Discover} />
          <Route path="/cart" component={Cart} />
          <Route path="/account" component={Account} />

          <Route path="/notifications" component={Notification} />
          <Route path="/flights" component={Flights} />
        </Switch>

        <div
          className="fixed bottom-4 navbar bg-white text-gray-400 flex justify-evenly p-4 shadow-xl rounded-full"
          style={{ width: "300px" }}
        >
          <NavLink
            to="/"
            exact
            activeStyle={{
              color: "blue",
            }}
          >
            <h1 className="material-icons">home</h1>
          </NavLink>
          <NavLink
            to="/discover"
            exact
            activeStyle={{
              color: "blue",
            }}
          >
            <h1 className="material-icons">place</h1>
          </NavLink>
          <NavLink
            to="/cart"
            exact
            activeStyle={{
              color: "blue",
            }}
          >
            <h1 className="material-icons">shopping_cart</h1>
          </NavLink>
          <NavLink
            to="/account"
            exact
            activeStyle={{
              color: "blue",
            }}
          >
            <h1 className="material-icons">account_circle</h1>
          </NavLink>
        </div>
      </div>
    </Router>
  );
}
