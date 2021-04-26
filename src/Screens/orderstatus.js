import React, { useState, useEffect } from "react";
import "./orderstatus.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import firebase from "firebase";
import {db} from "./fire.js";
import ProgressBar from 'react-bootstrap/ProgressBar'



import logo from "./images/logo.png";

function OrderStatus() {
    

  return (
    
<div>
    <div className="orderstatusform">
      <div className="website_header">
        <div>
          <a className="contact_button" href="https://www.google.com/">
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
          <div className="page_title">ORDER STATUS</div>
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={3}>
        <Grid item xs={2}>
            <a className="myaccount" href="https://www.google.com/">
                My Account
            </a>
            
            /
            <a className="myorder" href="https://www.google.com/">
                My Orders 
            </a>
        </Grid>
        </Grid>
       <div className="middlecont" >
           <div className="left">
           <div className="track_your_order">
            
            
            <div style={{fontSize:"15px", padding:"5px"}}>
            <FaMapMarkerAlt style={{color: "#FFFFFF"}}  />
            {" "}
            TRACK YOUR ORDER
            </div>
            {" "}
            {" "}
            <div>
                <div style={{fontSize:"10px", paddingTop:"-55px"}}>
                Expected delivery: 
                {" "}
                <a>
                    25-04-2021
                </a>
                </div>
                
            </div >
            <span className="div_box" >
                <div className="completebar">

                </div>
            </span>
            <div className="bar_div">
                <div className="ordered">
                    ORDERED
                </div>
                <div className="shipped">
                    Shipped
                </div>
                <div className="delivereydate">
                    Delivered
                </div>
            </div>
            
            
            
            
        </div>
       

      <div className="shipping_info">
        <a style={{fontSize:"20px", paddingLeft:"15px",paddingTop:"5px"}}>
            SHIPPING INFORMATION
        </a>
        
                <div style={{fontSize:"10px", padding:"5px"}}>
                    <a>
                    Delivery Method:
                    </a>
                    {" "}
                    <a>
                        Delivery
                    </a>
                </div>
                <div style={{fontSize:"10px", padding:"5px"}}>
                    <a>
                        Tracking ID:
                    </a>
                    {" "}
                    {" "}
                    <a>
                        19278271460
                    </a>
                </div>
                <div style={{fontSize:"10px", padding:"5px"}}>
                    <a>
                        Shipping To: 
                    </a>
                    {" "}
                    {" "}
                    <a>
                        Room 622, M-7, Lahore University of Management Sciences, DHA Phase3
                        Lahore
                    </a>
                </div>
                <div style={{fontSize:"10px", padding:"5px"}}>
                    <a>
                        Order ID: 
                    </a>
                    {" "}
                    
                    <a>
                        2412451
                    </a>
                </div>

                
            
        
        
        
        
      </div>
        </div>

            <div className="right">
        <div className="order_details">
            <div style={{fontSize:"20px", paddingLeft:"5px",paddingTop:"15px"}}>
                Order Details
            </div>
            <div className="order_dev">
                <div className="order_left">
                
                </div>
                <div className="order_right">
                    <div className="tot">
                        <div style={{fontSize:"20px", paddingLeft:"15px"}}>
                            <a>
                                Sub Total:
                            </a>
                            {"     "}
                            <a>
                                29997
                            </a>
                        </div>
                        <br></br>
                        <br></br>
                        <div style={{fontSize:"20px", paddingLeft:"15px"}}>
                            <a>
                                Delivery Charges:
                            </a>
                            {"     "}
                            <a>
                                300
                            </a>
                        </div>
                        <br></br>
                        <br></br>
                        <div style={{fontSize:"20px", paddingLeft:"15px"}}>
                            <a>
                                Total:
                            </a>
                            {"     "}
                            <a>
                                30297
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            

</div>
            </div>

        {/*
        

      
        */}
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
    </div>
  );
}
export default OrderStatus;
