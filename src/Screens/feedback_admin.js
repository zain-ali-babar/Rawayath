import React, { useState, useEffect } from "react";
import './feedback_admin.css';
import { db } from "./fire.js";
import firebase from "firebase";
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import { useHistory } from "react-router-dom";
import Logo from './images/logo.png'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function FeedBackAdmin(){

    const history = useHistory("");
    const [feedbackList, setFeedbackList] = useState([])

    useEffect(()=>{
      console.log("useeffect work")
      db.collection('review').onSnapshot(snapshot =>{
        setFeedbackList(snapshot.docs.map(doc=> ({customer_id: doc.data().customer_id ,customer_email: doc.data().customer_email, customer_name: doc.data().customer_name, customer_phone: doc.data().customer_phone, customer_type: doc.data().customer_type, date: doc.data().date   ,order_id: doc.data().order_id, review_content: doc.data().review_content, status: doc.data().status, id: doc.id})))
      })
    }, [])

    // console.log(feedbackList)

    

    function FeedbackContent(){

      return(
        feedbackList.map((content, index)=>{
          return(
            content.status=='done' ? <div></div>: 
            <div id = {content.id} className='list_item_aa feedback_item_aa'>
              <div>{index+1}</div>
              <div>{content.order_id}</div>
              <div>{new Date(content.date).toString().substring(0,21)}</div>
              <div>
                <div>Name: {content.customer_name}</div>
                <div>Phone: {content.customer_phone}</div>
                <div>Email: {content.customer_email}</div>
                <div>Id: {content.customer_id}</div>
                <div>{content.customer_type}</div>
              </div>
              <div>{content.review_content}</div>
              <div>
              <button className={content.status==='done' ? 'complete':'incomplete'} 
              onClick={()=>{
                if(content.status=='done'){
                  db.collection('review').doc(content.id).update({status:'notdone'})
                }else if(content.status=='notdone'){
                  db.collection('review').doc(content.id).update({status:'done'})
                }
              }}
              >{content.status}</button>
              </div>
            </div>
           
           );
        })
      );

    }

    return(
      <div className='feedback_admin_aa'>
        <div className="header">
        </div>
        <div className='title_bar_aa'>
          Feedback / complaints
        </div>
        <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
        <div className='middle_content_aa'>
          <div className = 'list_item_aa list_heading_aa'>
            <div>S.r. no.</div>
            <div>Order Number</div>
            <div>Date</div>
            <div>Customer Details</div>
            <div>FeedBack/Complaint</div>
            <div>Status</div>
          </div>
          <FeedbackContent/>
          
          
        </div>
        <div className='dashboard_aa'>
          <button onClick={(e) => {
            e.preventDefault();
            history.push("/admin");
          }}>BACK TO DASHBOARD</button>
        </div>
        <div className="footer_aa" >
        
        </div>
      </div>


    );
  }

  export default FeedBackAdmin;