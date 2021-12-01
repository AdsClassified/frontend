import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { requestForgotOtp, sendNewPassword } from "../Connection/Auth";
import { useHistory } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  let history = useHistory();

  const handleSendOtp = async () => {
    // console.log(email);

    let res = await requestForgotOtp(email);
    // console.log(res);

    if (res.data.success === true) {
      toast.success("OTP sent to your Email", {
        position: toast.POSITION.TOP_RIGHT,
      });
      window.localStorage.setItem("otp", res.data.otp);
      setOtpSent(true);
    } else {
      toast.error("Error Sending OTP", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleChangeEmail = (evt) => {
    setEmail(evt.target.value);
  };

  const handleEnterOtpChange = (evt) => {
    setOtp(evt.target.value);
  };

  const handleVerifyEmail = () => {
    // console.log("verified");
    if (window.localStorage.getItem("otp") === otp) {
      // console.log("in iffffffffff");
      setVerified(true);
      toast.success("OTP sent to your Email", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Wrong OTP", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handleNewPasswordChange = (evt) => {
    setNewPassword(evt.target.value);
  };

  const handleSetPassword = async (evt) => {
    // console.log(newPassword);
    let res = await sendNewPassword(newPassword, email);

    if (res.data.success === true) {
      toast.success(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      history.push("/login");
    } else {
      toast.error(res.data.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className="shadow py-4"
              style={{ height: "600px", width: "100%" }}
            >
              <div>
                <h2>Forgot Password ?</h2>
                {otpSent === false && (
                  <div>
                    <div class="form-group mt-5 px-4">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        //   value={values.email}
                        value={email}
                        onChange={handleChangeEmail}
                      />
                    </div>
                    <button
                      // type="submit"
                      class="btn btn-primary w-75"
                      onClick={handleSendOtp}
                    >
                      Send OTP
                    </button>
                  </div>
                )}

                {otpSent && verified === false && (
                  <div className="mt-5 px-4">
                    <h4>Email Verification</h4>
                    <br />
                    <div class="form-group">
                      <label for="exampleInputPassword1">Enter OTP</label>
                      <input
                        type="number"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="emailOtp"
                        value={otp}
                        onChange={handleEnterOtpChange}
                      />
                      <br />
                      <button
                        // type="submit"
                        class="btn btn-primary w-75"
                        onClick={handleVerifyEmail}
                      >
                        Verify Email
                      </button>
                    </div>
                    Didn't get OTP ?{" "}
                    <button
                      // type="submit"
                      class="btn btn-primary btn-sm"
                      onClick={handleSendOtp}
                    >
                      Request New
                    </button>
                  </div>
                )}
                {verified && (
                  <div className="mt-5 px-4">
                    <h4>Set New Password</h4>
                    <br />
                    <div class="form-group">
                      <label for="exampleInputPassword1">Enter Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        name="emailOtp"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                      />
                      <br />
                      <button
                        // type="submit"
                        class="btn btn-primary w-75"
                        onClick={handleSetPassword}
                      >
                        Set New Password
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" d-none d-md-block col-12 col-md-6">
            {/* <img className="img-fluid" src={Signupback} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
