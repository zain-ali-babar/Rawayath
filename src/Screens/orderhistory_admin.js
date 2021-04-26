import './orderhistory_admin.css';
import React , {useState,useEffect} from 'react'
import {FaSearch, FaUserAlt} from 'react-icons/fa'
import Logo from './images/logo.png'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, TabContent } from 'reactstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import firebase from "firebase";
import {db} from "./fire.js";
import { useHistory } from 'react-router-dom';
function OrderHistoryAdmin(){
  const history=useHistory()
  const [listOrder, setListOrder] = useState([])
  // const [listItem, setListItem] = useState([])
  const [completeOrder, setCompleteOrder] = useState([])
  // const [find, setFind] = useState('true')
  
  // setListOrder(['aa','aa', 'aa'])
  var user = firebase.auth().currentUser;
  if (user != null) {
    var id=user.uid;
    }

  useEffect(()=>{
        
    db.collection("order").onSnapshot(snapshot =>{
      setListOrder(snapshot.docs.map(doc=> ({order_id: doc.data().order_id , date: doc.data().date,  shipping_status:doc.data().shipping_status, customer_id: doc.data().customer_id})))
    })

    }, [])
    

  function TableHeading(){

    return(
        <div className='table_headingoh'>
          <div>Date</div>
          <div>Order Number</div>
          <div>Customer Id</div>
          <div>Status</div>

        </div>
    );
  }

  function TableContent(){
    return(
      <div className='table_contentoh'>
         {
          listOrder.map((content)=>{

            {/* db.collection("items").where("order_id", "==",content.order_id).onSnapshot(snapshot =>{
              setListItem(snapshot.docs.map(doc=> ({color: doc.data().color , name: doc.data().name, price:doc.data().price, quantity:doc.data().quantity, size:doc.data().size})))}) */}
            
            {/* console.log("-0------") */}
            {/* console.log(listItem) */}



          return (
            <div className='orderoh' onClick={()=>{
              
              return(
      
              history.push("./itemsadmin/"+content.order_id)
              );}}>
              <div>{new Date(content.date).toString().substring(0,21)}</div>
              <div>{content.order_id}</div>
              <div>{content.customer_id}</div>
              <div>{content.shipping_status}</div>
            </div>
          );
        })
        }

     
      </div>
    );
  }



  return(
    <div className='order_historyoh'>
      <div className="headeroh">
      </div>
      <div className='title_baroh'>
        order History
      </div>
      <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
      <div className='middle_contentoh'>
        <TableHeading/>
        <TableContent/>
        
      </div>
      <div>
        <button style={{padding: "0.5rem", margin: "1rem", backgroundColor:"#504d4d" , color: 'white' , outline: 'none', border:'none'}} 
        onClick={()=>{
              
              return(
      
              history.push("/admin")
              );}}>Go Back</button>
      </div>
      
      
    </div>
  );
}
export default OrderHistoryAdmin;