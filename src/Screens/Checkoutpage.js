import React, { useState, useEffect } from "react";
import "./Checkoutpage.css";
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
    const [firstname,setFname] = useState('');
    const [lastname,setLname] = useState('');
	const [address,setAddress] = useState('');
	const [phone,setPhone]=useState('');
	const [email,setEmail] = useState('');
	const [house,setHouse] = useState('');
  const [city,setCity] = useState('');
  
	


	function resetForm() {

        setEmail("");
        setLname("");
        setPhone("");
        setAddress("");
        setFname("");
        setCity("");
        setHouse("");
    }
    const handleClick=(evt)=>{
        evt.preventDefault()
        if(firstname=="")
        {
          alert("First name is empty")
        }
        else if (email=="")
        {
          alert("Last name is empty")

        }
        else if (phone=="")
        {
          alert("Phone is empty")

        }
        else if (address=="")
        {
          alert("Address is empty")

        }
        else if (lastname=="")
        {
          alert("Last name is empty")

        }
        else if (house=="")
        {
          alert("House no is empty")

        }
        else if (city=="")
        {
            alert("City is empty")
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
        <div>
          <a className="contact-button" href="https://www.google.com/" className="contact-button" href="https://www.google.com/">
            CONTACT US/ FEEDBACK
          </a>
        </div>
        
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="page-title">CHECKOUT PAGE</div>
        </Grid>
      </Grid>
      <hr />
      <div className="middle-content">
        <Grid container spacing={2}>
          <Grid xs={7}>
            <div className="register-box">
              <Grid container spacing={3}>
                <Grid xs={6}>
                  <div style={{ margin: "0em 0em 0em 0em" }}>
                    <input 
                    type='name'
                    placeholder="First name"
			      	value={firstname}
			      	onChange={event => setFname(event.target.value)} 
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div style={{ margin: "0em 0em 0em 0em" }}>
                    <input 
                    type='name'
                    placeholder="Last name"
			      	value={lastname}
			      	onChange={event => setLname(event.target.value)} 
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={6}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='email'
                    placeholder="Email"
			      	value={email}
			      	onChange={event => setEmail(event.target.value)} 
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              {/* </Grid>
              <Grid container spacing={3}> */}
                {/* <Grid xs={3}>
                  <div className="input-box" style={{ margin: "3em 0em 0em 0em" }}>
                    Phone 
                  </div>
                </Grid> */}
                <Grid xs={6}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='text'
                    placeholder="Phone"
			      	value={phone}
			      	onChange={event => setPhone(event.target.value)}
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={6}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='text'
                    placeholder="House no"
			      	value={house}
			      	onChange={event => setHouse(event.target.value)}
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
                <Grid xs={6}>
                  <div style={{ margin: "3em 0em 0em 0em" }}>
                    <input 
                    type='text'
                    placeholder="City"
			      	value={city}
			      	onChange={event => setCity(event.target.value)}
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid xs={12}>
                  <div style={{ margin: "3em 0em 3em 0em" }}>
                    <input 
                    type='text'
                    placeholder="Address"
			      	value={address}
			      	onChange={event => setAddress(event.target.value)}
                    style={{ width: "80%" }}></input>
                  </div>
                </Grid>
              </Grid>
              
              {/* <button type='submit' onClick={handleClick} style={{margin: "3em auto 0em", outline: "None"}}>CHANGE</button> */}
                    <div style={{ textAlign: "center" }}>
                      <a className="return-cart" href="">
                        Return to cart
                      </a>
                    </div>
            </div>
            
          </Grid>
          <Grid xs={5}>
          <div className="checkout-box">
         
          </div>
          </Grid>
          

        </Grid>
        {/* <span style={{ color: "red" }}>*</span>  */}
      </div>
      <div className="footer">
          <div style={{ fontSize: "1em", padding: "5px" }}>
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
  );
}
export default EditProfile;