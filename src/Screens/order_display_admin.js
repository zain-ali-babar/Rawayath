import React, { useState, useEffect } from "react";
import "./order_display_admin.css";
import { db } from "./fire.js";
import firebase from "firebase";
import axios from "axios";
import Select from "react-select";
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { BsTrashFill } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import logo from "./images/logo.png";

function OrderDisplayAdmin ({match}) {
    const history= useHistory();
    const [listItem, setListItem] = useState([])
    const [listOrder, setListOrder] = useState([])
    const [total, setTotal] = useState([])
    const [status, setStatus] = useState("")
    let orderId = match.params.id
    // let id_recieved = match.params.id;
    // let data=id_recieved.split('status')
    // let orderId = data[0]
    // setStatus(data[1])
    useEffect(() => {
        db.collection("items").where("order_id", "==",orderId).onSnapshot(snapshot =>{
            setListItem(snapshot.docs.map(doc=> ({
                color: doc.data().color, 
                name: doc.data().name, 
                price:doc.data().price, 
                quantity:doc.data().quantity, 
                size:doc.data().size})))
        })
        
    },[])

    console.log(listItem)

    const border = (i) => {
        if(i==0){
            return '0rem'
        }
        else{
            return '0rem'
        }
    }

    const calc_total = () => {
        var temp=0
        listItem.map((item,index) => {
            temp=temp+item.price*item.quantity
        })
        return (temp)
    }


    // function approve_decline() {
    //     if(listOrder[0].shipping_status=='unapproved'){
    //     return (
    //         <div className='approve_details_admin'>
    //             <button
    //                 type="submit"
    //                 style={{
    //                 margin: "2.5rem 1rem 1.5rem 0em",
    //                 height: "3rem",
    //                 width: "10rem",
    //                 fontSize: "1rem",
    //                 fontWeight: "bold",
    //                 borderRadius: "1rem",
    //                 outline: "none",
    //                 backgroundColor: "lightgreen"
                    
    //                 }}
    //             >
    //                 {<text style={{ color: "black" }}>APPROVE</text>}
    //             </button>

    //             <button
    //                 type="submit"
    //                 style={{
    //                 margin: "2.5rem 1rem 1.5rem 1rem",
    //                 height: "3rem",
    //                 width: "10rem",
    //                 fontSize: "1rem",
    //                 fontWeight: "bold",
    //                 borderRadius: "1rem",
    //                 outline: "none",
    //                 backgroundColor: "red"
                    
    //                 }}
    //             >
    //                 {<text style={{ color: "black" }}>DECLINE</text>}
    //             </button>
    //         </div>
    //     );}
    //     else{
    //         return(
    //             <div className='changeStatus' style={{alignContent:'left', textAlign:'left', marginBottom:'1.5rem'}}>
    //                 <select
    //                     class="form-select form-select-lg mb-3"
    //                     aria-label=".form-select-lg example"
    //                     value={status}
    //                 >
    //                     <option>Current Status: {listOrder[0].shipping_status}</option>
    //                     {/* <option value="unapprove">Unapprove</option> */}
    //                     <option value="approve">Approve</option>
    //                     <option value="shipped">Shipped</option>
    //                     <option value="delivered">Delivered</option>
    //                     <option value="decline">Decline</option>
    //                 </select>
    //             </div>
    //         )
    //     }
    // }

    return (
        <div>
            <div className="page_titles" style={{padding:'1rem'}}>ORDER DETAILS</div>
            <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
            <br></br>
            <br></br>
            <div style={{margin:'auto',width:'100rem'}}>
                <div style={{textAlign:'left', fontWeight:'300', fontSize:'1.5rem', marginBottom:'1rem'}}>
                    {/* <div>Customer ID: </div> */}
                    <div>Order ID: {orderId}</div>
                </div>
                
                <div className='changeStatus' style={{alignContent:'left', textAlign:'left', marginBottom:'1.5rem'}}>
                    <select
                        class="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                        // value='Current Status'
                        onChange={(event) =>
                            {
                                if(event.target.value=='null'){
                                    alert("Please Select a Shipping Status")
                                }
                                else{
                                    db.collection("order").doc(orderId).update({
                                    shipping_status: event.target.value
                                    })
                                }
                            }
                          }
                    >
                        <option value='null'>Current Status</option>
                        <option value="unapproved">Unapprove</option>
                        <option value="approved">Approve</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="declined">Decline</option>
                    </select>
                </div>

                <div className="cart_table_o">
                    <div className="heading_box_o" style={{borderTop:'0.2rem solid black',borderLeft:'0.35rem solid black',}}> No.</div>
                    <div className="heading_box_o" style={{borderTop:'0.2rem solid black'}}>Color</div>
                    <div className="heading_box_o" style={{borderTop:'0.2rem solid black'}}>Name</div>
                    <div className="heading_box_o" style={{borderTop:'0.2rem solid black'}}>Price</div>
                    <div className="heading_box_o" style={{borderTop:'0.2rem solid black'}}>Quantity</div>
                    <div className="heading_box_o" style={{borderTop:'0.2rem solid black', borderRight:'0.35rem solid black'}}>Size</div>
                </div>

                {listItem.map((item, index) => (
                    <div className="cart_table_o" >
                        <div className="list_box_o" style={{borderLeft:'0.2rem solid black', borderTop:`${border(index)}`,}}>
                            {index+1}
                        </div>
                        <div className="list_box_o" style={{borderTop:`${border(index)}`,}}>
                            {item.color}
                        </div>
                        <div className="list_box_o" style={{borderTop:`${border(index)}`,}}>{item.name}</div>
                        <div className="list_box_o" style={{borderTop:`${border(index)}`,}}>Rs. {item.price}</div>
                        <div className="list_box_o" style={{borderTop:`${border(index)}`,}}>{item.quantity}</div>
                        <div className="list_box_o" style={{borderRight:'0.2rem solid black', borderTop:`${border(index)}`,}}>
                            {item.size}
                        </div>
                    </div>
                ))}
            </div>

            <div className="r_box_o">
                <div
                className="final_box_o">
                TOTAL
                </div>
                <div className="final_box_o">{calc_total()}</div>
            </div>

            <button
                type="submit"
                onClick={()=>{
              
              return(
      
              history.push("/orderhistoryadmin")
              );}}
                style={{
                margin: "2.5em auto 0em",
                height: "3rem",
                width: "11rem",
                fontSize: "1rem",
                fontWeight: "bold",
                borderRadius: "1rem",
                outline: "none",
                backgroundColor: "#504d4d"
                
                }}
            >
                {<text style={{ color: "white" }}>GO BACK</text>}
            </button>
        </div>
    )

}

export default OrderDisplayAdmin;
