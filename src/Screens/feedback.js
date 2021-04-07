import React, { useState, useEffect } from "react";
import "./feedback.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import logo from "./images/logo.png";

function feedback() {
  return (
    <div className="loginForm">
      <div className="website-header">
        <div>
          <a className="contact-button" href="https://www.google.com/">
            CONTACT US
          </a>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <a className="rawayath-logo" href="">
            <img src={logo} alt="Image of logo" width="100" height="33"></img>
          </a>
        </Grid>
        <Grid item xs={4}>
          <div className="page-title">FEEDBACK FORM</div>
        </Grid>
      </Grid>
      <hr />
      <div className="middle-content">
      <Grid container spacing={3}>
          <Grid xs={12}>
            <div className="feedback-box">
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    Full Name <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    <input type="email" style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    Email <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    <input type="email" style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    Phone <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    <input type="email" style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    Order Number <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    <input type="email" style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    Complaint/ Feedback <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    <input type="email" style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                
                
                <Grid xs={8}>
                  <div>
                    <button type="button" className="submit-button">
                      SUBMIT
                    </button>
                  </div>
                </Grid>
              </Grid>
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
export default feedback;