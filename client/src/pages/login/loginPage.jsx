import React from "react";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/userSlice/userSlice";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

import { useNavigate } from "react-router-dom";

import { initialState } from "../../redux/userSlice/userSlice.utils";

// Styles, Components
import { Button } from "react-bootstrap";

import "./loginPage.styles.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.logged);

  const onSuccess = (res) => {
    const profile = { ...res.profileObj, logged: true };
    dispatch(updateUser(profile));
    navigate("/profile");
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    dispatch(updateUser(initialState));
    navigate("/home");
  };

  const handleBackHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  return (
    <div className="login-container">
      <div className="login-title">
        <h2>Bo3 BLD Trainer Login</h2>
      </div>
      <div className="login-btns">
        {!isLogged ? (
          <GoogleLogin
            className="google-login-btn"
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        ) : (
          <GoogleLogout
            className="google-login-btn"
            clientId={process.env.REACT_APP_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logOut}
          />
        )}
        <Button onClick={() => handleBackHome()}>Home</Button>
      </div>
    </div>
  );
};

export default LoginPage;
