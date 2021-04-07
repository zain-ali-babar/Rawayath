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
    return(
        <div>
            <div className='website-header'>
            <div>
                <a className="contact-button" href="https://www.google.com/">
                    CONTACT US
                </a>
                </div>
            </div>
        </div>
    );
}

export default Shoppingcart;