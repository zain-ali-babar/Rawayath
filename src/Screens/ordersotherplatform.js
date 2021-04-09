import React, { useState, useEffect } from "react";
import "./Onlineordersotherplatform.css";
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


function EditProfile() {
    const [productID,setProductId] = useState('');
	const [productdetails,setProductdetails] = useState('');
	const [customer,setCustomer]=useState('');
	const [quantity,setQuantity] = useState('');
	const [price,setPrice] = useState('');
  const [platform,setPlatform] = useState('');
  
	


	function resetForm() {

        setProductId("");
        setProductdetails("");
        setCustomer("");
        setQuantity("");
        setPrice("");
        setPlatform("");
    }
    // const resetPass=()=>{
		
		// setPassword("");
    //     setCPassword("");
    // }
    const handleClick=(evt)=>{
        evt.preventDefault()
        if(productID=="")
        {
          alert("ProductId is empty")
        }
        else if (productdetails=="")
        {
          alert("Product details is empty")

        }
        else if (customer=="")
        {
          alert("Customer is empty")

        }
        else if (quantity=="")
        {
          alert("Quantity is empty")

        }
        else if (price=="")
        {
          alert("Price is empty")

        }
        else if (platform=="")
        {
          alert("Platform is empty")

        }
        

    }

    
    const handleClick1=(e)=>{
      
//       firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     var id=user.uid;
    
    
//     db.collection('buyer').doc(id).set({
//       buyer_id:id,
//       email:email,
//       mailing_address:address,
//       name:name,
//       password:password,
//       phone:phone
      
//   }).then(()=>{
//     alert("Account Created")
//       resetForm();
//   }).catch(error=>{
//       alert(error.message)
//   })
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     alert(errorMessage)
//     // ..
//   });


  

          
     
      
       
    }

  return (
    <div>
      <div className="website-header">
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <a className="rawayath-logo" href="">
            <img src={logo} alt="Image of logo" width="100" height="33"></img>
          </a>
        </Grid>
        <Grid item xs={4}>
          <div className="page-title">Order Details from Social Media Platforms</div>
        </Grid>
      </Grid>
      <hr />
      <div className="middle-content">
        <Grid container spacing={3}>
          <Grid xs={12}>
            <div className="register-box">
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div className="input-box" style={{ margin: "0em 0em 0em 0em" }}>
                    Product ID <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "0em 0em 0em 0em" }}>
                    <input 
                    type='text'
			      	
			      	value={productID}
			      	onChange={event => setProductId(event.target.value)} 
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div className="input-box" style={{ margin: "3em 0em 0em 0em" }}>
                    Product Details <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='text'
			      	
			      	value={productdetails}
			      	onChange={event => setProductdetails(event.target.value)} 
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div className="input-box" style={{ margin: "3em 0em 0em 0em" }}>
                    Customer Details <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='text'
			      	
			      	value={customer}
			      	onChange={event => setCustomer(event.target.value)}
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div className="input-box" style={{ margin: "3em 0em 0em 0em" }}>
                    Quantity <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='text'
			      	
			      	value={quantity} 
			      	onChange={event => setQuantity(event.target.value)}
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div className="input-box" style={{ margin: "3em 0em 0em 0em" }}>
                    Price <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='text'
			      	
			      	value={price}
			      	onChange={event => setPrice(event.target.value)}
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={3}>
                  <div className="input-box" style={{ margin: "3em 0em 0em 0em" }}>
                    Platform <span style={{ color: "red" }}>*</span>
                  </div>
                </Grid>
                <Grid xs={8}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='text'
			      	
			      	value={platform}
			      	onChange={event => setPlatform(event.target.value)}
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
                
              </Grid>
              
              <button type='submit' onClick={handleClick} style={{margin: "3em auto 0em", outline: "None"}}>Submit</button>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="footer">
          <div className="footer-bar">
            
          </div>
        </div>
    </div>
  );
}
export default EditProfile;