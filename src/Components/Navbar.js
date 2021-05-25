import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

import Logo from "../Assets/Logo.png";
import { useAuth } from "../Context/Auth-Context";
import { ToastContainer, toast } from "react-toastify";
import { getAds } from "../Connection/Placead";

const Navbar = () => {
  const { loggedIn, logout } = useAuth();
  const [ads, setAds] = useState();

  const history = useHistory();

  const handleRedirection = () => {
    if (loggedIn === false) {
      toast.error("Your need to Login", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  console.log(loggedIn);

  // useEffect(() => {
  //   const fetchAds = async () => {
  //     let foundAds = await getAds();

  //     console.log(foundAds);
  //     setAds(foundAds.data.ads);
  //   };

  //   fetchAds();
  // }, []);
  return (
    <div className="shadow-lg">
      <nav
        style={{ backgroundColor: "white" }}
        class=" navbar navbar-expand-lg navbar-light bg-white "
      >
        <div className="container-fluid">
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            class="nav-link"
            to="/"
          >
            <img
              className="img-fluid"
              style={{ height: "30px", marginLeft: "-50px" }}
              src={Logo}
            />
          </NavLink>
          {/* <a class="navbar-brand" href="/">
            Logo
          </a> */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li> */}
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                class="nav-link"
                to="/placead"
                href="#"
                onClick={handleRedirection}
              >
                <button
                  className="btn ml-3"
                  style={{ color: "white", backgroundColor: "#FF6E14" }}
                >
                  <i class="far fa-plus-square mr-2"></i>
                  Place an ad
                </button>
              </NavLink>

              <li className="nav-item ml-0 ml-lg-3 mt-0 mt-lg-2 text-left">
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  class="nav-link"
                  to={{
                    pathname: "/search",
                    // state: ads,
                  }}
                  href="#"
                >
                  <i class="fas fa-search mr-2"></i>
                  Search
                </NavLink>
              </li>
            </ul>
            {/* <button className="btn btn-danger"> hello</button> */}

            {/* <div className="mr-3">
              <i class="far fa-bell"></i>
              <br />
              My Research
            </div> */}
            <div className="mb-2 mb-lg-0 d-flex justify-content-start">
              {" "}
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
                // className="mx-4 mt-2 "
                className="mr-3"
                onClick={handleRedirection}
              >
                <i class="far fa-bell mr-2"></i>
                <br className="d-none d-lg-block" />
                My Research
              </NavLink>
            </div>
            <div className="mb-2 mb-lg-0 d-flex justify-content-start">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/signin"
                // className="mx-4 mt-2 "
                className="mr-3"
                onClick={handleRedirection}
              >
                <i class="far fa-heart mr-2"></i>
                <br className="d-none d-lg-block" />
                Favourites
              </NavLink>
            </div>

            <div className="mb-2 mb-lg-0 d-flex justify-content-start">
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/signin"
                // className="mx-4 mt-2 "
                className="mr-3"
                onClick={handleRedirection}
              >
                <i class="far fa-envelope-open mr-2"></i>
                <br className="d-none d-lg-block" />
                Messages
              </NavLink>
            </div>

            <div className="mb-2 mb-lg-0 d-flex justify-content-start">
              {loggedIn === false && (
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to="/login"
                  // className="mx-4 mt-2 "
                  className="mr-3"
                >
                  <i class="far fa-user mr-2"></i>
                  <br className="d-none d-lg-block" />
                  Login
                </NavLink>
              )}
              {loggedIn === true && (
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to="/profile"
                  // className="mx-4 mt-2 "
                  className="mr-3"
                  onClick={handleRedirection}
                >
                  <i class="far fa-user mr-2"></i>
                  <br className="d-none d-lg-block" />
                  Profile
                </NavLink>
              )}
            </div>

            {/* <div className="mr-3">
              <i class="far fa-heart"></i>
              <br />
              Favourites
            </div>
            <div className="mr-3">
              <i class="far fa-envelope-open"></i>
              <br />
              Messages
            </div>
            <div className="mr-3">
              <i class="far fa-user"></i>
              <br />
              Login
            </div> */}
            {/* <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
