import React, { useState, useEffect } from "react";
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
import ApproveOrders from "./approve_orders";
import './admin.css';

function AdminDashboard(){
    const history = useHistory();
    function approve (){
        return(
         history.push("./approve_orders")
        );
      }
    return(
        <div className="admin">
        <div className="side_bar">
        <div >
        <a href="">Register</a>
        </div>
        <div>
        <a href="./approve_orders">APPROVE ORDERS</a>
        </div>
        
        <div>
        <a href="">Register</a>
        </div>
        
        <div>
        <a href="">Register</a>
        </div>
        <div>
        <a href="">Register</a>
        </div>
        <div>
        <a href="">Register</a>
        </div>
        
        <div>
        <a href="">Register</a>
        </div>
        <div>
        <a href="">Register</a>
        </div>
        <div>
        <a href="">Register</a>
        </div>

    
        
        
        
        
        </div>
        <div>

        </div>
        </div>
    );
        
    
}
export default AdminDashboard;