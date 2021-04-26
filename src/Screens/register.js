import React, { useState, useEffect } from "react";
import "./register.css";
import { db } from "./fire.js";
import firebase from "firebase";
import axios from "axios";
import Select from "react-select";
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import logo from "./images/logo.png";

function Register() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const history = useHistory("");
  function resetForm() {
    setEmail("");
    setPassword("");
    setPhone("");
    setAddress("");
    setName("");
    setCPassword("");
  }
  const resetPass = () => {
    setPassword("");
    setCPassword("");
  };
  const handleClick = (evt) => {
    evt.preventDefault();
    if (name == "") {
      alert("Name is empty");
    } else if (email == "") {
      alert("Email is empty");
    } else if (phone == "") {
      alert("Phone is empty");
    } else if (address == "") {
      alert("Mailing Address is empty");
    } else if (password == "") {
      alert("Password is empty");
    } else if (cpassword == "") {
      alert("Confirm Password is empty");
    } else {
      if (password == cpassword) {
        handleClick1();
      } else {
        alert("Password doesn't match");
        resetPass();
      }
    }
  };

  const handleClick1 = (e) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        var id = user.uid;

        db.collection("buyer")
          .doc(id)
          .set({
            buyer_id: id,
            email: email,
            mailing_address: address,
            name: name,
            password: password,
            phone: phone
          })
          .then(() => {
            alert("Account Created");
            resetForm();
            history.push("/login");
          })
          .catch((error) => {
            alert(error.message);
          });
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };
  const home = (e) => {
    e.preventDefault();
    return history.push("/");
  };
  return (
    <div>
      <div className="website_headerr">
        <div>
          <a className="contact_buttonr" href="https://www.google.com/">
            CONTACT US
          </a>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <a className="rawayath_logor" href="" onClick={home}>
            <img src={logo} alt="Image of logo" width="100" height="33"></img>
          </a>
        </Grid>
        <Grid item xs={4}>
          <div className="page_titler">REGISTER</div>
        </Grid>
      </Grid>
      <hr />
      <div className="middle_contentr">
        <Grid container spacing={3}>
          <Grid xs={12}>
            <div className="register_boxr">
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div
                    className="input_boxr"
                    style={{ margin: "0em 0em 0em 0em" }}
                  >
                    Full Name <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "0em 0em 0em 0em" }}>
                    <input
                      type="name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      style={{ width: "80%" }}
                    ></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div
                    className="input_boxr"
                    style={{ margin: "3em 0em 0em 0em" }}
                  >
                    Email <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      style={{ width: "80%" }}
                    ></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div
                    className="input_boxr"
                    style={{ margin: "3em 0em 0em 0em" }}
                  >
                    Phone <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input
                      type="text"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      style={{ width: "80%" }}
                    ></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div
                    className="input_boxr"
                    style={{ margin: "3em 0em 0em 0em" }}
                  >
                    Mailing Address <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input
                      type="text"
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                      style={{ width: "80%" }}
                    ></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div
                    className="input_boxr"
                    style={{ margin: "3em 0em 0em 0em" }}
                  >
                    Password <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input
                      type="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      style={{ width: "80%" }}
                    ></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div
                    className="input_boxr"
                    style={{ margin: "3em 0em 0em 0em" }}
                  >
                    Confirm Password <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input
                      type="password"
                      value={cpassword}
                      onChange={(event) => setCPassword(event.target.value)}
                      style={{ width: "80%" }}
                    ></input>
                  </div>
                </Grid>
              </Grid>

              <button
                type="submit"
                onClick={handleClick}
                style={{ margin: "3em auto 0em" }}
              >
                Register
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="footer">
        <div style={{ fontSize: "0.5em", padding: "5px" }}>
          BE A PART OF OUR SOCIAL NETWORK
        </div>
        <div className="social_media">
          <a href="" style={{ padding: "10px" }}>
            <FaFacebookSquare style={{ color: "#504d4d" }} />
          </a>
          <a href="" style={{ padding: "10px" }}>
            <FaInstagram style={{ color: "#504d4d" }} />
          </a>
        </div>
        <div className="footer_bar">
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
  );
}
export default Register;
