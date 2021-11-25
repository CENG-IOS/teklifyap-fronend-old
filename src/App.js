import React, { Suspense, useState } from "react";
import { Home } from "./pages/Home";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";

import PasswordP from "./pages/PasswordP";
import { NotFound } from "./pages/NotFound";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/Animations/ScrollToTop";

import HomePage from "./pages/Home";
import OffersPage from "./pages/Offers";
import InventoryPage from "./pages/Inventory";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import MakeOfferPage from "./pages/MakeOffer";


const App = () => {
  const Auth = useSelector((state) => state.auth.authentication);
  const Theme = useSelector((state) => state.theme.theme);
  const [progress, setProgress] = useState(0);
  document.body.style = !Theme ? null : "background: #40403E;";

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="position-fixed navindex w-100">
        <Navbar></Navbar>
      </div>
      <div className="nav-space">
     
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            {Auth ? (
              <Route path="/Offers">
                <OffersPage />
              </Route>
            ) : null}
            {Auth && <Route path="/PasswordP" component={PasswordP}></Route>}
            {Auth && (
              <Route path="/Inventory">
                <InventoryPage />
              </Route>
            )}
            {Auth && (
              <Route path="/Profile">
                <ProfilePage />
              </Route>
            )}
            {Auth && (
              <Route path="/MakeOffer">
                <MakeOfferPage />
              </Route>
            )}
            <Route path="/Login">
              <LoginPage />
            </Route>
            {/*<Route path="/Home" component={Home}></Route>*/}
            <Route path="/Register">
              <RegisterPage />
            </Route>
            {/* <Route path="*" component={NotFound}></Route>*/}
            {!Auth && <Redirect to="/Login" />}
          </Switch>
     
      </div>
    </BrowserRouter>
  );
};

export default App;
