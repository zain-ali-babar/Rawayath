
import React , {useState,useEffect} from 'react'
//imports for product description page
import './productDescription.css'
import Logo from './images/logo.png'
import {FaShoppingCart} from "react-icons/fa"
import {FaArrowLeft} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa"
import { useHistory,useParams } from "react-router-dom";
import {db} from "./fire.js";
import firebase from "firebase";

function ProductDescription({match}){
  let s=match.params.id;
  console.log(s)
  const[quantity,setQuantity]=useState("")
  const[color,setColor]=useState("")
  const[size,setSize]=useState("")
  const[prod,setProd]=useState("")
  useEffect(()=>{
  db.collection('product').doc(s).get().then(snapshot=>setProd({description:snapshot.data().description,name:snapshot.data().name,picture_link:snapshot.data().picture_links,price:snapshot.data().price}))
})
console.log(quantity)

const handleclick=(e)=>{
  var user = firebase.auth().currentUser;


  if (user != null) {
    var uid=user.uid;

  }
  db.collection('shoppingcart').doc(uid).set({
    buyer_id:uid,
    product_id:s,
    quantity:quantity,
    color:color,
    size:size,
    
    
}).then(()=>{
  alert("Added to shopping cart")
    
}).catch(error=>{
    alert(error.message)
})

  
}
    return(
      
      <div className= "product-description">
        <div className="header">
          <a href="" className="contact-us-bar">
            Contact Us
          </a>
        </div>
        <div className="title-bar">
          <div className="rawayath-logo">
            <img style = {{paddingLeft: "3rem"}}src={Logo} width="200rem"></img>
          </div>
          <div className="shoppingcart-button">
            <button>
              <FaShoppingCart/>
            </button>
          </div>
        </div>
        <div style={{backgroundColor: "#504d4d", height:"2px"}}></div>
        <div className="middle-content">
          <div className="product-image-area">
            <div className="scroll-button">
              <FaArrowLeft/>
            </div>
            <div className="product-image">
              <img src={prod.picture_link} alt="No Image" />
            </div>
            <div className="scroll-button">
              <FaArrowRight/>
            </div>
          </div>
          <div className="product-details">
            <div className="product-name inner-padding">
              <h1>{prod.name}</h1>
            </div>
            <div className="product-price inner-padding">
              <h1>Rs. {prod.price}</h1>
            </div>
            <div className="availability inner-padding">
              <h2>Description:</h2>
              <div>
                {prod.description}
              </div>
            </div>
            <div className="product-color inner-padding">
              <h2>Select Color:</h2>
              <select name="color" id="color" value={color} onChange={event => setColor(event.target.value)}>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="White">White</option>
              </select>
            </div>
            <div className="product-size inner-padding">
              <h2>Select Size:</h2>
              <div className="size-buttons" value={size} onClick={event => setSize(event.target.value)}>
                <button className="s" type='submit' value="S">S</button>
                <button className="m" type='submit' value="M">M</button>
                <button className="l" type='submit' value="L">L</button>
                <button className="xl" type='submit' value="XL">XL</button>
              </div>
            </div>
            <div className="product-quantity inner-padding">
              <h2>Select Quantity:</h2>
              <select name="color" id="color" value={quantity} onChange={event => setQuantity(event.target.value)}>
                <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
              </select>
            
            </div>
            
            <div className="add-to-cart">
              <button onClick={handleclick} >
                ADD TO CART
              </button>
            </div>
          </div>

        </div>





        {/* <div className="footer">  
        <div className="social-media">
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
        </div> */}
      </div>
    );
  }

  export default ProductDescription