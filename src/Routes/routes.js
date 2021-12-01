import React from "react";
import "../App.css";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Manageorders from "../Pages/Manageorder";
import Searchactivity from "../Pages/Searchactivity";
import Favourites from "../Pages/Favourites";
import Search from "../Pages/Search";
import Placead from "../Pages/Placead";
import Navbar from "../Components/Navbar";
import Editad from "../Pages/EditAd";
import Showad from "../Pages/Showad";
import Sendmessage from "../Pages/Sendmessage";
import Messages from "../Pages/Messages";
import Forgot from "../Pages/Forgot";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
// import Footer from "../Components/Footer";
import { ToastContainer } from "react-toastify";
// import { useAuth } from "../Contexts/Auth-Context";
import "react-toastify/dist/ReactToastify.css";

export const AuthenticatedRoutes = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer
          style={{
            width: "400px",
            textAlign: "center",
            fontSize: "1.3em",
          }}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => <Home {...routeProps} />}
          />
          <Route
            exact
            path="/search"
            render={(routeProps) => <Search {...routeProps} />}
          />
          <Route exact path="/profile" render={(routeProps) => <Profile />} />
          <Route
            exact
            path="/manageorders"
            render={(routeProps) => <Manageorders />}
          />
          <Route
            exact
            path="/searchactivity"
            render={(routeProps) => <Searchactivity />}
          />
          <Route
            exact
            path="/favourites"
            render={(routeProps) => <Favourites />}
          />

          <Route exact path="/placead" render={(routeProps) => <Placead />} />
          <Route
            exact
            path="/editad"
            render={(routeProps) => <Editad {...routeProps} />}
          />
          <Route
            exact
            path="/showad/:id"
            render={(routeProps) => <Showad {...routeProps} />}
          />
          <Route
            exact
            path="/sendmessage"
            render={(routeProps) => <Sendmessage {...routeProps} />}
          />
          <Route
            exact
            path="/messages"
            render={(routeProps) => <Messages {...routeProps} />}
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export const UnAuthenticatedRoutes = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer
          style={{
            width: "400px",
            textAlign: "center",
            fontSize: "1.3em",
          }}
        />
        <Switch>
          <Route exact path="/" render={(routeProps) => <Home />} />
          <Route exact path="/signup" render={(routeProps) => <Signup />} />
          <Route exact path="/login" render={(routeProps) => <Login />} />
          <Route exact path="/forgot" render={(routeProps) => <Forgot />} />
          <Route
            exact
            path="/search"
            render={(routeProps) => <Search {...routeProps} />}
          />

          <Route
            exact
            path="/showad/:id"
            render={(routeProps) => <Showad {...routeProps} />}
          />
          <Route render={() => <Redirect to="/login" />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};
