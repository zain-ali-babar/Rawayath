import React, { useState, useEffect } from "react";
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
import "./admin.css";

function AdminDashboard() {
  const history = useHistory("");
  const addp = (e) => {
    e.preventDefault();
    return history.push("/addproducts");
  };
  const approvep = (e) => {
    e.preventDefault();
    return history.push("/approve_prod");
  };
  const feedbck = (e) => {
    e.preventDefault();
    return history.push("/feedbackadmin");
  };
  const orderHistory = (e) => {
    e.preventDefault();
    return history.push("/orderhistoryadmin");
  };
  const viewProduct = (e) => {
    e.preventDefault();
    return history.push("/editproduct");
  };
  function logoutAdmin(){
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
    return history.push("/");
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="admin">
      <div className="side_bar" >
        <div>
          <a  onClick={addp}>
            Add Products
          </a>
        </div>
        {/* <div>
          <a  onClick={approvep}>Approve Products</a>
        </div> */}

        <div>
          <a   onClick={feedbck}>Feedbacks</a>
        </div>

        <div>
          <a  onClick={orderHistory}>Order History / Change Status</a>
        </div>
        <div>
          <a  onClick={viewProduct}>View Product</a>
        </div>

        <div>
          <a onClick={logoutAdmin}>Sign Out</a>
        </div>
        
      </div>
      <div></div>
    </div>
  );
}
export default AdminDashboard;
