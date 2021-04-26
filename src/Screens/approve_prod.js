import React, { useState, useEffect } from "react";
import "./approve_prod.css";
import { db } from "./fire.js";
import firebase from "firebase";
import axios from "axios";
import Select from "react-select";
import { Route, Switch } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';
import Grid from "@material-ui/core/Grid";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

import logo from "./images/logo.png";

function ApproveOrders() {
  // const [items, setItems] = React.useState([]);
  const [buyer, setBuyer] = React.useState([]);
  const [number, setNumber] = React.useState([]);
  const [time, setTime] = React.useState([]);
  const [status, setStatus] = React.useState([]);
  const [orders, setOrders] = useState([]);
  const [prods, setProds] = useState([]);
  const [total, setTotal] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    db.collection("order").onSnapshot((snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          order_id: doc.data().order_id,
          buyer_id: doc.data().customer_id,
          date: doc.data().date,
          sstatus: doc.data().shipping_status
        }))
      );
    });
  }, []);

  function Get1(y) {
    //y.preventDefault()
    db.collection("items")
      .where("order_id", "==", y)
      .onSnapshot((snapshot) => {
        setItem(
          snapshot.docs.map((doc) => ({
            id: doc.data().product_id,
            name: doc.data().name,
            price: doc.data().price,
            color: doc.data().color,
            quantity: doc.data().quantity,
            size: doc.data().size
          }))
        );
      });
  }

  console.log(item);
  // orders.map((x,index)=>
  // {
  //   if(x.sstatus=="unapproved")
  //   {

  //   }
  // })
  return (
    <div>
      <div className="website-header">
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
          <div className="page-title">CURRENT ORDERS</div>
        </Grid>
      </Grid>

      <div className="middle-content">
        {orders.map((x, index) => {
          if (x.sstatus == "unapproved") {
            {
              Get1(x.order_id);
            }
            return (
              <div className="list-box">
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                    {x.date}
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    Order# {x.order_id}
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    {`Ordered By: `}
                    <text style={{ fontWeight: "normal" }}>{x.buyer_id}</text>
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    Items:
                  </div>
                  {item.map((item1, index) => {
                    return (
                      <div style={{ fontSize: "1.8rem" }}>-{item1.name}</div>
                    );
                  })}
                </div>
                <div>
                  <button
                    value={"Approve"}
                    onClick={(event) =>
                      db.collection("order").doc(x.order_id).update({
                        shipping_status: "approved"
                      })
                    }
                    type="submit"
                    value="approved"
                    style={{
                      margin: "6rem 3rem 0em 0em",
                      height: "4rem",
                      width: "10em",
                      fontSize: "1.5rem",
                      borderRadius: "1em",
                      outline: "none",
                      backgroundColor: "green"
                    }}
                  >
                    {<text style={{ color: "white" }}>APPROVE</text>}
                  </button>
                  <button
                    value={"cancelled"}
                    onClick={(event) =>
                      db.collection("order").doc(x.order_id).update({
                        shipping_status: "cancelled"
                      })
                    }
                    type="submit"
                    value="cancelled"
                    style={{
                      margin: "6rem 0rem 0rem 3em",
                      height: "4rem",
                      width: "10em",
                      fontSize: "1.5rem",
                      borderRadius: "1em",
                      outline: "none",
                      backgroundColor: "red"
                    }}
                  >
                    {<text style={{ color: "white" }}>DECLINE</text>}
                  </button>
                </div>
              </div>
            );
          }
        })}
        {orders.map((x, index) => {
          if (x.sstatus == "approved" || x.sstatus == "shipped") {
            return (
              <div className="list-box">
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
                    {x.date}
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    Order# {x.order_id}
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    {`Ordered By: `}
                    <text style={{ fontWeight: "normal" }}>{x.buyer_id}</text>
                  </div>
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    Items:
                  </div>
                  {/* {items[index].map((item, index) => {
                    return <div style={{ fontSize: "1.8rem" }}>-{item}</div>;
                  })} */}
                </div>
                <div style={{ padding: "6rem" }}>
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    ORDER STATUS
                  </div>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    value={status}
                    onChange={(event) =>
                      db.collection("order").doc(x.order_id).update({
                        shipping_status: event.target.value
                      })
                    }
                  >
                    <option>Current Status: {x.sstatus}</option>
                    <option value="approved">Approved</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                  {/* <DropdownButton id="dropdown-basic-button" title="Order Status" size='lg'>
                                <Dropdown.Item href="">Action</Dropdown.Item>
                                <Dropdown.Item href="">Another action</Dropdown.Item>
                                <Dropdown.Item href="">Something else</Dropdown.Item>
                            </DropdownButton> */}
                </div>
              </div>
            );
          }
        })}
      </div>

      <div className="footer">
        <div style={{ fontSize: "0.5em", padding: "5px" }}>
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

export default ApproveOrders;
