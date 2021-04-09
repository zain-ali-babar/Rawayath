import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import firebase from "firebase";
import {db} from "./fire.js";

import logo from "./images/logo.png";

function Login() {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const handleClick=(e)=>{
    console.log("haha")
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    var id=user.uid;
    var docRef = db.collection("admin").doc(id);

docRef.get().then((doc) => {

    if (doc.exists) {
      return(
        history.push("/admin")
		);
    } else {
      return(
        history.push("/")
      );
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
    
  
    // ...
  })
  .catch((error) => {
    alert("Username or password is wrong!!")
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });



  }
  const reg=(e)=>{
    e.preventDefault();
    return(
      history.push("/register")
    );
  }
  const home=(e)=>{
    e.preventDefault();
    return(
      history.push("/")
    );
  }

  return (
    

    <div className="loginForm">
      <div className="website-header">
        <div onClick={reg}>
          <a className="contact-button" href="" >
            CONTACT US
          </a>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <a className="rawayath-logo" href="" onClick={home}>
            <img src={logo} alt="Image of logo" width="100" height="33"></img>
          </a>
        </Grid>
        <Grid item xs={4}>
          <div className="page-title">SIGN IN</div>
        </Grid>
      </Grid>
      <hr />
      <div className="middle-content">
        <Grid container spacing={3}>
          <Grid xs={6}>
            <div className="login-continer">
              <div className="rectangular-box">
                <div style={{ height: "40px" }}></div>
                <Grid container spacing={3}>
                  <Grid xs={4}>
                    <div
                      style={{
                        // textAlign: "center",
                        padding: "25px 0em 0em 4em"
                      }}
                    >
                      Email
                    </div>
                  </Grid>
                  <Grid xs={8}>
                    <div
                      style={{
                        textAlign: "center",
                        padding: "25px 0px 0px 0px"
                      }}
                    >
                      <input 
                      type="email"
                      value={email}
                      onChange={event => setEmail(event.target.value)}></input>
                    </div>
                  </Grid>
                  <Grid xs={4}>
                    <div
                      style={{
                        // textAlign: "center",
                        padding: "25px 0em 0em 4em"
                      }}
                    >
                      Password
                    </div>
                  </Grid>
                  <Grid xs={8}>
                    <div
                      style={{
                        textAlign: "center",
                        padding: "25px 0px 0px 0px"
                      }}
                    >
                      <input 
                      type="password"
                      value={password}
                      onChange={event => setPassword(event.target.value)}></input>
                    </div>
                  </Grid>
                  <Grid xs={12}>
                    <div>
                      <button type="submit" onClick={handleClick} className="signin-button">
                        SIGN IN
                      </button>
                    </div>
                  </Grid>
                  <Grid xs={12}>
                    <div style={{ textAlign: "center" }}>
                      <a className="forgot-password" href="">
                        Forgot Passowrd?
                      </a>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid xs={6}>
            <div className="login-continer">
              <div style={{ height: "80px" }}></div>
              <div className="new-customer">NEW CUSTOMER?</div>
              <div className="content">
                Creating an account will help youtrack orders, easy checkout and
                you will be updated with our latest promotion and deals.
              </div>
              <div>
                <button className="signup-button" type="button" onClick={reg}>
                  CREATE A NEW ACCOUNT
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="footer">
          <div style={{ fontSize: "0.5em", padding: "5px" }}>
            BE A PART OF OUR SOCIAL NETWORK
          </div>
          <div className="social-media">
            <a href="" style={{ padding: "10px" }}>
              <FaFacebookSquare style={{ color: "#504d4d" }} />
            </a>
            <a href="" style={{ padding: "10px" }}>
              <FaInstagram style={{ color: "#504d4d" }} />
            </a>
          </div>
          <div className="footer-bar">
            <a href="" style={{ padding: "10px" }}>
              <FaRegClock style={{ color: "white", padding: "3px" }} />
              <span
                style={{
                  color: "white",
                  padding: "0em 0em 6em 0em",
                  textDecoration: "none"
                }}
              >
                {" "}
                Support 24/7
              </span>
            </a>

            <a href="" style={{ padding: "10px" }}>
              <FaMapMarkerAlt style={{ color: "white", padding: "3px" }} />
              <span
                style={{
                  color: "white",
                  padding: "0em 0em 6em 0em",
                  textDecoration: "none"
                }}
              >
                {" "}
                Track your order
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
