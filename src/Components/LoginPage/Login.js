import React, { useEffect, useState } from "react";
import "./Login.css";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import { useHistory, useLocation } from "react-router";
import "@lottiefiles/lottie-player";
import google from "../../images/googleLogo.gif";
import fb from "../../images/fbLogo.gif";
import fbLogo from "../../images/facebook-logo-png.png";
import HowItWorks from "./HowItWorks/HowItWorks";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const setinLocalStorage = (user) => {
    localStorage.setItem("email", `${user.email}`);
    localStorage.setItem("profileImg", `${user.photoURL}`);
    localStorage.setItem("name", `${user.displayName}`);
    localStorage.setItem("uid", `${user.uid}`);
    history.replace(from);
  };

  const ContinueWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setinLocalStorage(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const continueWithFaceBook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setinLocalStorage(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  }, []);

  return (
    <div className="loginPage">
      <div className="row m-0">
        <div className="col-md-3">
          <div className="identityOfFB">
            <img className="img-fluid" src={fbLogo} alt="" />
            <h3>FaceBook 2.O</h3>
          </div>
        </div>

        <div className="col">
          <div className="welcoming d-flex justify-content-center align-items-center">
            <h2 dataText="Welcome...">Welcome...</h2>
          </div>
          <div className="loginButtons">
            <div
              onClick={ContinueWithGoogle}
              className="logInButton d-flex align-items-center"
            >
              <img className="google" src={google} alt="" />
              <p>Continue With GOOGLE</p>
            </div>

            <div
              onClick={continueWithFaceBook}
              className="logInButton d-flex align-items-center"
            >
              <img src={fb} alt="" />
              <p>Continue With Facebook</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 ms-4 ps-4 loginLeftSide">
          <lottie-player
            autoplay
            loop
            background="transparent"
            speed="0.7"
            mode="normal"
            src="https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json"
            style={{ width: "550px", height: "650px" }}
          ></lottie-player>
        </div>
      </div>

      <div className={`goToBottom ${scroll ? "d-none" : ""}`}>
        <lottie-player
          autoplay
          loop
          background="transparent"
          speed="0.7"
          mode="normal"
          src="https://assets5.lottiefiles.com/private_files/lf30_tjtEEL.json"
          style={{ width: "80px", height: "80px" }}
        ></lottie-player>
        <div className="bounceEffect">
          <p>Scroll for an Overview</p>
        </div>
      </div>

      <HowItWorks />
    </div>
  );
};

export default Login;
