import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { UnAuthenticatedRoutes, AuthenticatedRoutes } from "./Routes/routes";
import { useAuth } from "./Context/Auth-Context";
import {
  getAds,
  getActiveFeatureAds,
  getActiveAds,
} from "./Connection/Placead";
import { getCategories } from "./Connection/Categories";

function App() {
  const {
    loggedIn,
    login,
    logout,
    setAds,
    ads,
    categories,
    setCategories,
    setFeatureAds,
    notify,
    setNotify,
    handleNotify,
  } = useAuth();
  // const [ads, setAds] = useState();
  useEffect(() => {
    const fetchAds = async () => {
      let foundAds = await getActiveAds();
      console.log(foundAds);
      setAds(foundAds.data.ads);
    };
    fetchAds();

    const fetchFeatureAds = async () => {
      console.log("hello");
      let foundAds = await getActiveFeatureAds();
      console.log(foundAds);
      setFeatureAds(foundAds.data.ads);
    };

    fetchFeatureAds();

    // setAds(location.state);
  }, []);

  console.log(loggedIn);
  console.log(login);
  console.log(handleNotify);

  if (loggedIn) {
    console.log("I am here");
    login();
    return <AuthenticatedRoutes />;
  } else {
    return <UnAuthenticatedRoutes />;
  }
}

export default App;
