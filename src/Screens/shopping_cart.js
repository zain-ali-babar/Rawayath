import React, { useState, useEffect } from "react";
import "./shopping_cart.css";
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

function Shoppingcart() {
  const history = useHistory("");
  const [listProduct, setListProduct] = useState([]);
  const [sho, setSho] = useState();
  const [total, setTotal] = useState(0);
  const [pshow, setPshow] = useState("yes");
  const [image, setImage] = useState();
  var user = firebase.auth().currentUser;

  if (user != null) {
    var uid = user.uid;

    db.collection("shoppingcart")
    .where("buyer_id", "==", uid)
    .where("show", "==", "yes")
    .get()
    .then((snapshot) =>
      setListProduct(
        snapshot.docs.map((doc) => ({
          id: doc.data().buyer_id,
          name: doc.data().name,
          price: doc.data().price,
          color: doc.data().color,
          product_id: doc.data().product_id,
          quantity: doc.data().quantity,
          size: doc.data().size,
          show: doc.data().show,
          shopping_id: doc.data().shopping_id,
          pic_link: doc.data().pic_link
        }))
      )
    )

  // useEffect(() => {
    // db.collection("shoppingcart")
    //   .where("buyer_id", "==", uid)
    //   .where("show", "==", "yes")

    //   .onSnapshot((snapshot) => {
    //     setListProduct(
    //       snapshot.docs.map((doc) => ({
    //         id: doc.data().buyer_id,
    //         name: doc.data().name,
    //         price: doc.data().price,
    //         color: doc.data().color,
    //         product_id: doc.data().product_id,
    //         quantity: doc.data().quantity,
    //         size: doc.data().size,
    //         show: doc.data().show,
    //         shopping_id: doc.data().shopping_id
    //       }))
    //     );
    //   });

    
      // listProduct.map((prod, index) => {
      //   console.log(prod.price)
      //   console.log(prod.quantity)
      //   setTotal(total + prod.price * prod.quantity);
      // });
      // console.log('total')
      // console.log(total)


      
  // }, [])

    
  }

  const [quantity, setQuantity] = React.useState([]);

  const refresh_page = () => {
    var temp=0
    setTotal(0)
    db.collection("shoppingcart")
    .where("buyer_id", "==", uid)
    .where("show", "==", "yes")
    .get()
    .then((snapshot) =>
      setListProduct(
        snapshot.docs.map((doc) => ({
          id: doc.data().buyer_id,
          name: doc.data().name,
          price: doc.data().price,
          color: doc.data().color,
          product_id: doc.data().product_id,
          quantity: doc.data().quantity,
          size: doc.data().size,
          show: doc.data().show,
          shopping_id: doc.data().shopping_id
        }))
      )
      
    )
      listProduct.map((prod, index) => {
        console.log(prod.price)
        console.log(prod.quantity)
        temp=temp + prod.price * prod.quantity;
        
      console.log({index})
      console.log(temp)
      });
      setTotal(temp)
  }


  const handleClick = (e) => {
    e.preventDefault();
    
    var orderRef = db.collection("order").doc();
    orderRef.set({
      customer_id: uid,
      order_id: orderRef.id,
      date: Date.now(),
      shipping_status: "unapproved"
    });
    listProduct.map((prod, index) => {
      db.collection("items")
        .doc()
        .set({
          color: prod.color,
          name: prod.name,
          order_id: orderRef.id,
          price: prod.price,
          product_id: prod.product_id,
          quantity: prod.quantity,
          size: prod.size
        })
        .then(() => {
          db.collection("shoppingcart").doc(prod.shopping_id).update({
            show: "no"
          });
        });
        alert("Order Placed");
        history.push("/");
    });
    
  };

  const calc_total = () => {
    var temp=0
    listProduct.map((item,index) => {
        temp=temp+item.price*item.quantity
    })
    return temp
  }
  // listProduct.map((prod, index) => {
  //   setTotal(total + prod.price * prod.quantity);
  // });
  const home = (e) => {
    e.preventDefault();
    return history.push("/");
  };
  return (
    <div>
      <div></div>
      <div className="website_headers">
        <div>
          <a className="contact_buttons" href="https://www.google.com/">
            CONTACT US
          </a>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <a className="rawayath_logo" href="" onClick={home}>
            <img src={logo} alt="Image of logo" width="150rem" height="43rem"></img>
          </a>
        </Grid>
        <Grid item xs={4}>
          <div className="page_titles">SHOPPING CART</div>
        </Grid>
      </Grid>
      <div style={{height: '3rem'}}></div>
      <div className="cart_table">
        <div className="heading_box" style={{borderTop:'0.35rem solid black',borderLeft:'0.35rem solid black',}}></div>
        <div className="heading_box" style={{borderTop:'0.35rem solid black'}}>PREVIEW</div>
        <div className="heading_box" style={{borderTop:'0.35rem solid black'}}>PRODUCT</div>
        <div className="heading_box" style={{borderTop:'0.35rem solid black'}}>PRICE</div>
        <div className="heading_box" style={{borderTop:'0.35rem solid black'}}>QUANTITY</div>
        <div className="heading_box" style={{borderTop:'0.35rem solid black', borderRight:'0.35rem solid black'}}>SUB-TOTAL</div>
      </div>

      {listProduct.map((item, index) => (
        <div className="cart_table">
          <div className="list_box" style={{borderLeft:'0.35rem solid black',}}>
            <IconButton
              aria-label="delete"
              onClick={(e) => {
                db.collection("shoppingcart").doc(item.shopping_id).update({
                  show: "no"
                });
                refresh_page()
                refresh_page()
                // .then(() => {
                //   window.location.reload(false);
                // });
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
          <div className="list_box" style={{paddingTop: '0rem', height:'8rem'}}>
            <img src={item.pic_link} style={{height: '8rem', width:'6rem'}}></img>
          </div>
          <div className="list_box">{item.name}</div>
          <div className="list_box">Rs. {item.price}</div>
          <div
            className="list_box"
            style={{ alignContent: "center", paddingLeft: "6em" }}
          >
            <select
              class="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
              onChange={(e) => {
                db.collection("shoppingcart").doc(item.shopping_id).update({
                  quantity: e.target.value
                });
                refresh_page()
                refresh_page()
                // let products = [...listProduct];
                // let product = { ...products[index] };
                // product.quantity = event.target.value;
                // products[index] = product;
                // setListProduct({ products });
                // console.log(item);
                // setListProduct(({ listProduct }) => ({
                //   listProduct: [
                //     ...listProduct.slice(index - 1, index),
                //     {
                //       ...listProduct[index],
                //       quantity: event.target.value
                //     },
                //     ...listProduct.slice(index + 1)
                //   ]
                // }));
              }}
            >
              <option selected>{item.quantity}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            {/* {item.quantity} */}
          </div>
          <div className="list_box" style={{borderRight:'0.35rem solid black', }}>Rs. {item.price * item.quantity}</div>
        </div>
      ))}

      <div className="r_box">
       
        <div
          className="final_box"
        >
          TOTAL
        </div>
        <div className="final_box">{calc_total()}</div>
      </div>
      <button
        type="submit"
        style={{
          margin: "2em auto 0em",
          height: "4rem",
          width: "13rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          borderRadius: "1rem",
          outline: "none",
          backgroundColor: "#504d4d"
        }}
        onClick={handleClick}
      >
        {<text style={{ color: "white" }}>CHECKOUT</text>}
      </button>

      <div className="footers">
        <div className="social_medias">
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
        <div className="footer_bars">
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

export default Shoppingcart;
