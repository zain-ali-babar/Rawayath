import React, { useState, useEffect } from "react";
import "./Onlineordersotherplatform.css";
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

function Onlineorderotherplatform() {
  return (
    <div>
      <div className="website-header"></div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <a className="rawayath-logo" href="">
            <img src={logo} alt="Image of logo" width="100" height="33"></img>
          </a>
        </Grid>
        <Grid item xs={4}>
          <div className="page-title">
            Order Details From Social Media Platforms
          </div>
        </Grid>
      </Grid>
      <hr />
      <div className="middle-content">
        <Grid container spacing={3}>
          <Grid xs={12}>
            <div className="register1-box">
              <Grid container spacing={3}>
                <Grid xs={4}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    Product ID <span style={{ color: "red" }}>*</span>
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
                    Product Details <span style={{ color: "red" }}>*</span>
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
                    Customer Details <span style={{ color: "red" }}>*</span>
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
                    Quantity <span style={{ color: "red" }}>*</span>
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
                    Price <span style={{ color: "red" }}>*</span>
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
                    Platform<span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 3em" }}>
                    <input type="email" style={{ width: "80%" }}></input>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div>
                    <button type="button" className="submit-button">
                      Submit
                    </button>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="footer-bar"></div>
    </div>
  );
}
export default Onlineorderotherplatform;
