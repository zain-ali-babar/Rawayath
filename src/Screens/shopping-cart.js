import React, { useState, useEffect } from "react";
import "./shopping-cart.css";
import {db} from "./fire.js";
import firebase from "firebase";
import axios from "axios";
import Select from 'react-select';
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import logo from "./images/logo.png";

function Shoppingcart () {
    const [item,setItem] = useState([]);

    return(
        <div>
            <div className='website-header'>
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
                    <div className="page-title">SHOPPING CART</div>
                </Grid>
            </Grid>
            <div className='middle-content'>
                <div className='heading-box'></div>
                <div className='heading-box'>PREVIEW</div>
                <div className='heading-box'>PRODUCT</div>
                <div className='heading-box'>PRICE</div>
                <div className='heading-box'>QUANTITY</div>
                <div className='heading-box'>TOTAL</div>
                {item.map((object,index)=>(
                    <div>
                    <div className='list-box'></div>
                    <div className='list-box'></div>
                    <div className='list-box'></div>
                    <div className='list-box'></div>
                    <div className='list-box'></div>
                    <div className='list-box'></div>
                    </div>
                ))}
                <div className='list-box'></div>
                <div className='list-box'></div>
                <div className='list-box'></div>
                <div className='list-box'></div>
                <div className='list-box'></div>
                <div className='list-box'></div>
            </div>
            <div className='r-box'>
                <div className='final-box'>SUB-TOTAL</div>
                <div className='final-box'></div>
                <div className='final-box'>DISCOUNT CODE</div>
                <div className='final-box'></div>
                <div className='final-box' style={{fontSize: '1.5em', fontWeight: 'bold'}}>TOTAL</div>
                <div className='final-box'></div>
            </div>
        </div>
    );
}

export default Shoppingcart;