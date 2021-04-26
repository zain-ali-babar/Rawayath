import './feedbackbuyer.css';
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import firebase from 'firebase'
import Logo from './images/logo.png'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import {db} from "./fire.js";
function FeedBackBuyer(){

    const [fullname , setFullname] = useState("");
    const [phone , setPhone] = useState('')
    const [email , setEmail] = useState('')
    const [orderNumber , setOrderNumber] = useState('')
    const [feedback , setFeedback] = useState('')
    const [userid , setUserid] = useState('')
    var user = firebase.auth().currentUser;

    // if (user != null) {
    //   setUserid(user.uid)
    // }
    
    function resetForm() {

      setFullname("");
      setPhone("");
      setEmail("");
      setOrderNumber("");
      setFeedback("");
    }

  const handleClick1 = (evt)=>{
    // evt.preventDefault()
    db.collection('review').doc().set({
      customer_email: email,
      customer_id: user!=null?user.uid:'',
      customer_name: fullname,
      customer_phone: phone,
      customer_type: user==null ? 'visitor' : 'registered',
      date: Date.now(),
      order_id: orderNumber,
      review_content: feedback,
      status: 'notdone'
    })
  }

  

  const handleClick=(evt)=>{
    evt.preventDefault()
    if(fullname=="")
    {
      alert("Name is empty")
    }
    else if (email=="")
    {
      alert("Email is empty")

    }
    else if (phone=="")
    {
      alert("Phone is empty")

    }
    else if (feedback=="")
    {
      alert("Feedback/Complete is empty")

    }else{
      handleClick1();
      resetForm();

    }

  }
  


    return(
      <div className='feedback_buyer'>
        <div className="header">
          <a href="" className="contact_us_bar">
            Contact Us
          </a>
        </div>
          <div className="title_bar">
            <div className='title'>
              FEEDBACK/COMPLAINT
            </div>
          </div>

        <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
        <div className='middle_content'>
          <div className='feedback_form'>
           <div className='feedback_form_item'>
             <div>Full Name: <span style={{color:'red'}}>*</span></div>
             <input type='name'
			      	
			      	value={fullname}
			      	onChange={(event) => setFullname(event.target.value)} ></input>
           </div>
           <div className='feedback_form_item'>
             <div>Email: <span style={{color:'red'}}>*</span></div>
             <input type='email'
			      	
			      	value={email}
			      	onChange={(event) => setEmail(event.target.value)} ></input>
           </div>
           <div className='feedback_form_item'>
             <div>Phone: <span style={{color:'red'}}>*</span></div>
             <input type='phone'
			      	
			      	value={phone}
			      	onChange={(event) => setPhone(event.target.value)} ></input>
           </div>
           <div className='feedback_form_item'>
             <div>Order Number:</div>
             <input placeholder='If applicable' type='order'
			      	
			      	value={orderNumber}
			      	onChange={(event) => setOrderNumber(event.target.value)} ></input>
           </div> 
           <div className='feedback_form_item'>
             <div>Complaint/FeedBack <span style={{color:'red'}}>*</span></div>
             <textarea type='feedback'
			      	
			      	value={feedback}
			      	onChange={(event) => setFeedback(event.target.value)} ></textarea>
           </div>
           <div className='button_area'>
             <button onClick={handleClick} >Submit</button>
           </div>
          </div>
          <div className='contact_info'>
            <div className="rawayath_logo">
              <img src={Logo} width="250rem"></img>
            </div>
            <div>
              <h1 style={{fontSize:'3rem', padding: '2rem', textDecoration:'underline'}}>CONTACT US</h1>
              <div style={{fontWeight:'bold', fontSize:'1.3rem'}}>Phone Number: 0300-1234567</div>
              <div style={{fontWeight:'bold', fontSize:'1.3rem'}}>Email: rawayathclothing@gmail.com</div>

            </div>
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
  export default FeedBackBuyer;