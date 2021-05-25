import React, { useState } from "react";
import Loginback1 from "../Assets/loginback.jpg";
import Loginback2 from "../Assets/loginback2.jpg";
import { Link, NavLink, useHistory } from "react-router-dom";
import { loginUser } from "../Connection/Auth";
import { useAuth } from "../Context/Auth-Context";
import Toast from "../Components/Toast";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [phone, setPhone] = useState(false);
  const { login, loggedIn } = useAuth();
  const history = useHistory();
  const [state, setState] = useState({
    emailorphone: "",
    password: "",
  });

  const handleState = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (type) => {
    console.log(type);
    let res = await loginUser({
      ...state,
      type,
    });
    console.log();

    if (res.data.success === true) {
      if (res.data.emailVerified === true) {
        if (res.data.phoneVerified) {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
          login();
          window.localStorage.setItem("username", res.data.username);
          window.localStorage.setItem("accessToken", res.data.access_token);
          window.localStorage.setItem("email", res.data.email);
          window.localStorage.setItem("id", res.data.id);
          window.localStorage.setItem("phone", res.data.phone);
          window.localStorage.setItem("favourites", res.data.favourites);
          history.push("/");
        } else {
          toast.error("Your Phone is not verified", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else {
        toast.error("Your Email is not verified", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handlePhone = () => {
    setPhone(!phone);
  };
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <div className="row">
        <div className="col-12 d-none d-lg-block col-md-3 col-lg-4">
          <img className="img-fluid" src={Loginback1} />
        </div>
        <div className="col-12 d-flex justify-content-center col-md-6 col-lg-4 ">
          <div
            className="shadow mt-5"
            style={{ height: "550px", width: "100%" }}
          >
            <h2 className="mt-4">Login</h2>

            <div className="mt-4 px-4">
              {phone ? (
                <div class="form-group">
                  <label for="exampleInputEmail1">Phone</label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="emailorphone"
                    value={state.emailorphone}
                    onChange={handleState}
                  />
                </div>
              ) : (
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="emailorphone"
                    value={state.emailorphone}
                    onChange={handleState}
                  />
                </div>
              )}
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={state.password}
                  onChange={handleState}
                />
              </div>
              <div className="">
                <p>
                  <NavLink to="/login">
                    <span onClick={handlePhone}>
                      {phone ? "Email?" : "Phone Number?"}
                    </span>
                  </NavLink>
                </p>
                <NavLink to="/forgot">Forgot Password?</NavLink>
              </div>
              {phone ? (
                <button
                  class="btn btn-primary w-100 mt-1"
                  onClick={() => handleSubmit("phone")}
                >
                  Login
                </button>
              ) : (
                <button
                  class="btn btn-primary w-100 mt-1"
                  onClick={() => handleSubmit("email")}
                >
                  Login
                </button>
              )}
              <br />
              <p>
                Dont have an account ?{" "}
                <NavLink to="/signup">Create Account</NavLink>
              </p>
              <p className="d-inline mb-2">OR</p>
              <br />
              <div className="d-flex justify-content-center">
                {/* <div
                  className="fb-login-button"
                  data-width=""
                  data-size="medium"
                  data-button-type="continue_with"
                  data-layout="default"
                  data-auto-logout-link="false"
                  data-use-continue-as="false"
                ></div> */}
                <button className="btn-sm btn-primary">
                  <i class="fab fa-facebook"></i> continue with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-none d-lg-block col-md-3 col-lg-4">
          <img className="img-fluid mt-5" src={Loginback2} />
        </div>
      </div>
    </div>
  );
};

export default Login;
