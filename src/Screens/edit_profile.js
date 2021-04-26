import React, { useState, useEffect } from "react";
import "./edit.css";
import {db} from "./fire.js";
import firebase from "firebase";
import axios from "axios";
import Select from 'react-select';
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { FaFacebookSquare, FaWindows } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import logo from "./images/logo.png";


function EditProfile(){

  const history = useHistory("");
  const [fullname , setFullname] = useState('')
  const [phone , setPhone] = useState('')
  const [email , setEmail] = useState('')
  const [address , setAddress] = useState('')
  const [userDetails , setUserDetails] = useState([])
  const [update, setUpdate] = useState('true')
//   const [userPrev , setUserPrev] = useState('')
  const [userid , setUserid] = useState("")

// const getData=(e)=>{
//     e.preventDefault()
//     var user = firebase.auth().currentUser;

//     if(user!=null){
//       db.collection("buyer").where("buyer_id", "==",user.uid).onSnapshot(snapshot =>{
//           setUserDetails(snapshot.docs.map(doc=> ({name: doc.data().name , email: doc.data().email, mailing_address:doc.data().mailing_address, quantity:doc.data().quantity, password:doc.data().password,phone:doc.data().phone})))
//       })
//   }
// }

var user = firebase.auth().currentUser;
useEffect(()=>{
  db.collection("buyer").where("buyer_id", "==",user.uid).onSnapshot(snapshot =>{
    setUserDetails(snapshot.docs.map(doc=> ({name: doc.data().name , email: doc.data().email, mailing_address:doc.data().mailing_address, phone:doc.data().phone})))

  })
},[])

if(userDetails.length!=0 && update=='true'){
  setFullname(userDetails[0].name)
  setPhone(userDetails[0].phone)
  setEmail(userDetails[0].email)
  setAddress(userDetails[0].mailing_address)
  setUpdate('false')
}


  
console.log(userDetails)
const handleClick1 = (evt)=>{
  db.collection("buyer").doc(firebase.auth().currentUser.uid).update({
    email: email,
    name: fullname,
    phone: phone,
    mailing_address: address,
  }).then(()=>{
    alert('User Details Updated')
    return history.push("/")
  })
}


// const handleClick=(evt)=>{
//   evt.preventDefault()
//   if(fullname=="")
//   {
//     alert("Name is empty")
//   }
//   else if (email=="")
//   {
//     alert("Email is empty")

//   }
//   else if (phone=="")
//   {
//     alert("Phone is empty")

//   }
//   else if (feedback=="")
//   {
//     alert("Feedback/Complete is empty")

//   }else{
//     handleClick1();

//   }

// }


  return(
    // <div>{userDetails.length}</div>
    
    userDetails.length==0?<div>LOADING</div>:
    <div className='feedback_buyer'>
      <div className="header">
        <a href="" className="contact_us_bar">
          Contact Us
        </a>
      </div>
        <div className="ti_bar">
          <div className='ti'>
            EDIT PROFILE
          </div>
        </div>

      <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
      <div className='middle_content1'>
        <div className= 'middle_row1'>
          <div>Name</div>
          <input value={fullname} onChange = {(e)=>{
            e.preventDefault()
            setFullname(e.target.value)
          }}
          ></input>
        </div>
        <div className= 'middle_row1'>
          <div>Email</div>
          <input readonly value={email}></input>
        </div>
        <div className= 'middle_row1'>
          <div>Phone Number</div>
          <input value={phone} onChange = {(e)=>{
            e.preventDefault()
            setPhone(e.target.value)
          }}></input>
        </div>
        {/* <div className= 'middle_row1'>
          <div>Password</div>
          <input value={password} onChange = {(e)=>{
            e.preventDefault()
            setPassword(e.target.value)
          }}></input>
        </div> */}
        <div className= 'middle_row1'>
          <div>Address</div>
          <input value={address} onChange = {(e)=>{
            e.preventDefault()
            setAddress(e.target.value)
          }}></input>
        </div>
        <div className='button_area1'>
          <button onClick={handleClick1}>save changes</button>
        </div>

      </div>
      <div className="footer">  
    <div className="social_media">
      <div style={{ fontSize: "1rem", padding: "5px" }}>
        BE A PART OF OUR SOCIAL NETWORK
      </div>
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
export default EditProfile;